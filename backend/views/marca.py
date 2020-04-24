from django.template import loader
from django.http import HttpResponse 
from django.shortcuts import render, redirect, get_object_or_404

from backend.models import Brand, Product, User
from backend.forms import BrandForm, DeleteBrand

from pprint import pprint

def marcas(request):
	brand_list = Brand.objects.all()
	context = {
		'brand_list' : brand_list,
	}

	return render(request,'marcas/view_marcas.html', context)

def products_by_brand(request, pk):
	product_list = Product.objects.filter(brand=pk)

	context = {
		'product_list': product_list,
		'brand_pk': pk
	}

	return render(request, 'productos/view_productos.html', context)

def brand_new(request):
	
	if request.method == 'POST':
		form = BrandForm(request.POST, request.FILES)
	
		if form.is_valid():
			#pprint(request.POST)
			
			new_user = User.objects.create_user(username=request.POST['email'], email = request.POST['email'])
			new_user.first_name = request.POST['first_name']
			new_user.last_name = request.POST['last_name']
			new_user.movil = request.POST['phone_number']
			new_user.email = request.POST['email']
			
			brand = form.save()
			new_user.brand_id = brand
			
			brand.save()
			new_user.save()

			return redirect('marcas')
	else:
		form = BrandForm()
	
	return render(request, 'marcas/create_marca.html', {'form': form, 'title': 'Nueva Marca'})

def brand_edit(request, pk):
	brand = Brand.objects.get(pk=pk)

	try:
		user = User.objects.get(brand=brand)
	except User.DoesNotExist:
		user  = None

	if request.method == 'POST':
		form = BrandForm(request.POST, request.FILES, instance=brand)

		user.first_name = request.POST['first_name']
		user.last_name = request.POST['last_name']
		user.movil = request.POST['phone_number']
		user.username = request.POST['email']
		user.email = request.POST['email']
		
		if user == request.POST['email']:
				user.save()
		else:
			if form.is_valid():
				user.save()
		
		brand.save()

		return redirect('marcas')
	else:
		if user:	
			form = BrandForm(initial=
				{
					'first_name': user.first_name,
					'last_name' : user.last_name,
					'email' : user.email,
					'phone_number' : user.movil,
				}, instance=brand)
		else:
			form = BrandForm(instance=brand)

	return render(request,'marcas/create_marca.html', {'form': form, 'title': 'Edición de Marca'})
	
def brand_delete(request, pk):

	template = loader.get_template('marcas/delete_marca.html')
	brand = get_object_or_404(Brand, pk=pk)

	try:
		user = User.objects.filter(brand=brand).first()
	except User.DoesNotExist:
		user  = None

	if request.method == 'POST':
		form = DeleteBrand(request.POST, instance=brand)

		if form.is_valid():

			if user:
				user.delete()

			brand.delete()
			return redirect('marcas')
	else:
		form = DeleteBrand(instance=brand)
	
	return HttpResponse(template.render({'form': form, 'brand':brand.name}, request))