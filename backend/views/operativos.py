from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.utils.crypto import get_random_string
from django.core.mail import EmailMultiAlternatives
from django.conf import settings


from backend.forms import UserTerrenoForm, InactiveOperativo
from backend.models import User, Operativo, Brand, Product, OperativoConnection
from backend.views import send_email

from datetime import datetime

from pprint import pprint
from inspect import getmembers


@login_required
def index(request):
    operativos = Operativo.objects.filter(is_active=True)
    template = loader.get_template('operativos/list_operativos.html')

    return HttpResponse(template.render({'operativos': operativos}, request))

@login_required
def new(request):
    template = loader.get_template('operativos/crear_operativo.html')
    brands = Brand.objects.all()

    if request.method == 'POST':
        form = UserTerrenoForm(request.POST)

        if form.is_valid():
            new_user, created = User.objects.get_or_create(username=request.POST['movil'])
            new_user.first_name = request.POST['first_name']
            new_user.last_name = request.POST['last_name']
            new_user.movil = request.POST['movil']
            new_user.save()

            operativo = Operativo()
            operativo.user = new_user
            operativo.expiration = request.POST['expiration_date']
            operativo.activation = request.POST['activation_date']
            operativo.name = request.POST['name']
            operativo.description = request.POST['description']
            operativo.connections = request.POST['connections']
            operativo.token = get_random_string(length=6)
            operativo.brandsList = ','.join(request.POST.getlist('brands[]'))
            operativo.productList = ','.join(request.POST.getlist('products[]'))

            activation_date = datetime.strptime(operativo.activation, '%Y-%m-%d')
            
            brands = request.POST.getlist('brands[]')

            if activation_date.date() == datetime.now().date():
                operativo.is_ready = True

            operativo.save()
#----------------
            for id_brand in brands:
                brand_email = User.objects.filter(brand_id=id_brand).values('email','first_name','last_name')
                template ='email/create_operative.html'
               
                for bc in brand_email:
                    contact = "{} {}".format(bc['first_name'], bc['last_name'])
                    email = bc['email']
                    print("Email enviado a {} al correo {}".format(contact, email))
                
                context = {
                    'subject': 'Nuevo opertativo creado',
                    'contact': contact,
                    'host': settings.ALLOWED_HOSTS,
                    'chat': operativo.id
                }

                send_email.send_email(template, context, [email])
#------------
            return redirect('operativos')
    else:
        form = UserTerrenoForm()

    return HttpResponse(template.render({'form': form, 'brands' : brands}, request))

@login_required
def operativo_edit(request, pk):
    template = loader.get_template('operativos/crear_operativo.html')
    brands = Brand.objects.all()
    products = Product.objects.all()
    operativo = get_object_or_404(Operativo, pk=pk)

    if request.method == 'POST':
        form = UserTerrenoForm(request.POST, instance=operativo)
        
        if form.is_valid():
            new_user, created = User.objects.get_or_create(username=request.POST['movil'])
            new_user.first_name = request.POST['first_name']
            new_user.last_name = request.POST['last_name']
            new_user.movil = request.POST['movil']
            new_user.save()

            #operativo = Operativo()
            operativo.user = new_user
            operativo.expiration = request.POST['expiration_date']
            operativo.activation = request.POST['activation_date']
            operativo.name = request.POST['name']
            operativo.description = request.POST['description']
            operativo.connections = ','.join(request.POST.getlist('connections'))
            operativo.brandsList = ','.join(request.POST.getlist('brands[]'))
            operativo.productList = ','.join(request.POST.getlist('products[]'))

            activation_date = datetime.strptime(operativo.activation, '%Y-%m-%d')

            if activation_date.date() == datetime.now().date():
                operativo.is_ready = True

            operativo.save()

            brands = request.POST.getlist('brands[]')

            return redirect('operativos')
    else:

        form = UserTerrenoForm(initial=
            {
                'name': operativo.name,
                'description': operativo.description,
                'first_name': operativo.user.first_name,
                'last_name': operativo.user.last_name,
                'movil': operativo.user.movil,
                'connections': operativo.connections,
                'activation_date': operativo.activation.strftime('%Y-%m-%d'),
                'expiration_date': operativo.expiration.strftime('%Y-%m-%d')
            })

        brandsList = list(map(int, operativo.brandsList.split(','))) if len(operativo.brandsList) else []
        productList = list(map(int, operativo.productList.split(','))) if len(operativo.productList) else []
    
    return HttpResponse(template.render({'form': form, 'brands' : brands, 'is_edit':True, 'brandsList': brandsList, 'productList': productList}, request))


def invalidate(request, pk):
    template = loader.get_template('operativos/invalidate_operativo.html')
    operativo = get_object_or_404(Operativo, pk=pk)

    if request.method == 'POST':
        form = InactiveOperativo(request.POST, instance=operativo)

        if form.is_valid():

            all_connection = OperativoConnection.objects.filter(
                operativo=operativo)

            for conn in all_connection:
                user = conn.user
                conn.user.auth_token.delete()
                conn.delete()
                user.delete()

            operativo.is_active = False
            operativo.save()
            return redirect('operativos')
    else:
        form = InactiveOperativo(instance=operativo)

    return HttpResponse(template.render({}, request))


def activate(request, pk):
    template = loader.get_template('operativos/activate_operativo.html')
    operativo = get_object_or_404(Operativo, pk=pk)

    if request.method == 'POST':
        form = InactiveOperativo(request.POST, instance=operativo)

        if form.is_valid():
            operativo.activation = datetime.now()
            operativo.is_ready = True
            operativo.save()
            return redirect('operativos')
    else:
        form = InactiveOperativo(instance=operativo)

    return HttpResponse(template.render({}, request))


def chat(request, pk):
    template = loader.get_template('operativos/chat_window.html')
    operativo = get_object_or_404(Operativo, pk=pk)

    ip_client = request.client_ip

    return HttpResponse(template.render({'usuario': request.user,'operativo': operativo, 'ip_client':  ip_client}, request))


def chat_marca(request, pk):
    template = loader.get_template('operativos/chat_marca.html')
    operativo = get_object_or_404(Operativo, pk=pk)
    ip_client = request.client_ip

    return HttpResponse(template.render({'operativo': operativo, 'extendind': 'layout/base.html', 'ip_client': ip_client}, request))


def chat_ext_marca(request, pk):
    template = loader.get_template('operativos/chat_marca_ext.html')
    operativo = get_object_or_404(Operativo, pk=pk)

    ip_client = request.client_ip

    return HttpResponse(template.render({'ip_client':ip_client,'operativo': operativo, 'is_brand': True ,'extendind': 'layout/base_single.html'}, request))

@login_required
def list_connections(request, pk):
    operativo = get_object_or_404(Operativo, pk=pk)
    sessions = OperativoConnection.objects.filter(operativo_id=pk, is_active=True)

    context = {
        'operativo': operativo,
        'sessions': sessions,
        'count': sessions.count(),
    }

    return render(request, 'operativos/list_connections.html', context)

@login_required
def disconnect_session(request, pk, tk):
    session = OperativoConnection.objects.get(id = pk, operativo = tk)

    user = session.user
    
    session.is_active = 0
    session.save()

    user.delete()
   
    return redirect('connections', pk=tk)