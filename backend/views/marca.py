from django.template import loader
from django.http import HttpResponse 
from django.shortcuts import redirect, get_object_or_404

from backend.models import Brand, Product, User
from backend.forms import BrandForm, DeleteBrand

from pprint import pprint

def marcas(request):
	brand_list = Brand.objects.all();
	template = loader.get_template('marcas/view_marcas.html')

	context = {
		'brand_list' : brand_list,

	}

	return HttpResponse(template.render(context, request))


def products_by_brand(request, pk):
	product_list = Product.objects.filter(brand=pk)
	template = loader.get_template('productos/view_productos.html')

	context = {
		'product_list': product_list,
		'brand_pk': pk
	}

	return HttpResponse(template.render(context, request))

def brand_new(request):
	template = loader.get_template('marcas/create_marca.html')

	if request.method == 'POST':
		form = BrandForm(request.POST, request.FILES or None)

		pprint('Aqui entra')
	
		if form.is_valid():
			new_user, created = User.objects.get_or_create(username=request.POST['correo'])
			new_user.first_name = request.POST['first_name']
			new_user.last_name = request.POST['last_name']
			new_user.movil = request.POST['movil']
			new_user.email = request.POST['correo']
			new_user.save()

			pprint('el usuario')
			pprint(new_user)

			brand = form.save()
			new_user.brand = brand
			brand.save()

			return redirect('marcas')
	else:
		form = BrandForm()
	
	return HttpResponse(template.render({'form': form}, request))



def brand_detail(request, pk):

	template = loader.get_template('marcas/create_marca.html')
	brand = get_object_or_404(Brand, pk=pk)

	try:
		user = User.objects.filter(brand=brand).first()
	except User.DoesNotExist:
		user  = None

	if request.method == 'POST':
		form = BrandForm(request.POST, request.FILES or None, instance=brand)
		pprint(request.FILES)


		if form.is_valid():
			brand = form.save(commit=False)

			new_user, created = User.objects.get_or_create(username=request.POST['correo'])
			new_user.first_name = request.POST['nombre']
			new_user.last_name = request.POST['apellido']
			new_user.movil = request.POST['celular']
			new_user.email = request.POST['correo']
			
			
			new_user.brand = brand
			
			brand.save()
			new_user.save()

			return redirect('marcas')

	else:
		if user:
			form = BrandForm(initial=
				{
					'nombre': user.first_name,
					'apellido' : user.last_name,
					'celular' : user.movil,
					'correo' : user.email
				},
			instance=brand)
		else:
			form = BrandForm(instance=brand)
		

		pprint(form.__dict__)


	return HttpResponse(template.render({'form': form, 'is_edit': 'True'}, request))


def brand_delete(request, pk):

	template = loader.get_template('marcas/delete_marca.html')
	brand = get_object_or_404(Brand, pk=pk)

	if request.method == 'POST':
		form = DeleteBrand(request.POST, instance=brand)

		if form.is_valid():
			brand.delete()
			return redirect('marcas')
	else:
		form = DeleteBrand(instance=brand)
	
	return HttpResponse(template.render({'form': form, 'brand':brand.name}, request))