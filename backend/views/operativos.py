from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.utils.crypto import get_random_string


from backend.forms import UserTerrenoForm, InactiveOperativo
from backend.models import User, Operativo, Brand
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
	brands = Brand.objects.all();
	
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
			operativo.token = get_random_string(length=6)
			operativo.brandsList = ','.join(request.POST.getlist('brands[]'))
			operativo.productList = ','.join(request.POST.getlist('products[]'))

			activation_date = datetime.strptime(operativo.activation, '%Y-%m-%d')

			pprint(activation_date.date())
			pprint(datetime.now().date())

			if activation_date.date() == datetime.now().date():
				operativo.is_ready = True

			operativo.save()

			return redirect('operativos')
	else:
		form = UserTerrenoForm()
	
	return HttpResponse(template.render({'form': form, 'brands' : brands}, request))
	
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
	template = loader.get_template('operativos/chat.html')
	operativo = get_object_or_404(Operativo, pk=pk)


	return HttpResponse(template.render({'operativo': operativo}, request))




