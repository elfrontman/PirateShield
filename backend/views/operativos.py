from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.utils.crypto import get_random_string


from backend.forms import UserTerrenoForm, InactiveOperativo
from backend.models import User, Operativo, Brand, Product
from datetime import datetime

from pprint import pprint
from inspect import getmembers


@login_required
def index(request):
    operativos = Operativo.objects.filter(is_active=True)
    template = loader.get_template('operativos/list_operativos.html')

    

    return HttpResponse(template.render({'operativos': operativos}, request))


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
            operativo.token = get_random_string(length=6)
            operativo.brandsList = ','.join(request.POST.getlist('brands[]'))
            operativo.productList = ','.join(request.POST.getlist('products[]'))

            activation_date = datetime.strptime(operativo.activation, '%Y-%m-%d')

            #pprint(activation_date.date())
            #pprint(datetime.now().date())

            if activation_date.date() == datetime.now().date():
                operativo.is_ready = True

            operativo.save()

            return redirect('operativos')
    else:
        form = UserTerrenoForm()

    return HttpResponse(template.render({'form': form, 'brands' : brands}, request))

def operativo_edit(request, pk):
    template = loader.get_template('operativos/crear_operativo.html')
    brands = Brand.objects.all();
    products = Product.objects.all();
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
            operativo.brandsList = ','.join(request.POST.getlist('brands[]'))
            operativo.productList = ','.join(request.POST.getlist('products[]'))

            activation_date = datetime.strptime(operativo.activation, '%Y-%m-%d')

            if activation_date.date() == datetime.now().date():
                operativo.is_ready = True

            operativo.save()

            return redirect('operativos')
    else:

        form = UserTerrenoForm(initial=
            {
                'name': operativo.name,
                'description': operativo.description,
                'first_name': operativo.user.first_name,
                'last_name': operativo.user.last_name,
                'movil': operativo.user.movil,
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
    template = loader.get_template('operativos/chat_general.html')
    operativo = get_object_or_404(Operativo, pk=pk)

    ip_client = request.client_ip

    return HttpResponse(template.render({'operativo': operativo, 'ip_client':  ip_client}, request))


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
