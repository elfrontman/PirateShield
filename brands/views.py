""" Brand Views """

from django.template import loader
from django.http import HttpResponse 
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required

# Models
from brands.models import Brand
from backend.models import Product, User

# Forms
from brands.forms import BrandForm, DeleteBrand

@login_required
def brands(request):
	brand_list = Brand.objects.all()
	context = {
		'brand_list' : brand_list,
	}

	return render(request,'brands/brands_list.html', context)

@login_required
def products_by_brand(request, pk):
	product_list = Product.objects.filter(brand=pk)
	brand = Brand.objects.get(pk=pk)
	context = {
		'product_list': product_list,
		'brand_pk': pk,
		'brand': brand,
	}

	return render(request, 'productos/view_productos.html', context)

@login_required
def brand_new(request):
	
	if request.method == 'POST':
		form = BrandForm(request.POST, request.FILES)
	
		if form.is_valid():
			new_user = User.objects.create_user(username=request.POST['email'], email = request.POST['email'])
			new_user.first_name = request.POST['first_name']
			new_user.last_name = request.POST['last_name']
			new_user.movil = request.POST['phone_number']
			new_user.email = request.POST['email']
			
			brand = form.save()
			new_user.brand_id = brand

			brand.save()
			new_user.save()

			return redirect('brands')
	else:
		form = BrandForm()
	
	return render(request, 'brands/brand_form.html', {'form': form, 'title': 'Nueva Marca'})

@login_required
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
		user.save()
		brand.save()

		return redirect('brands')
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

	return render(request,'brands/brand_form.html', {'form': form, 'title': 'Edición de Marca'})

@login_required	
def brand_delete(request, pk):

	template = loader.get_template('brands/brand_delete.html')
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
			return redirect('brands')
	else:
		form = DeleteBrand(instance=brand)
	
	return HttpResponse(template.render({'form': form, 'brand':brand.name}, request))

@login_required
def brand_category(request):
    brand_categories = CategoryBrand.objects.all()
    context = {'brand_categories': brand_categories}
    return render(request,'brands/list_category.html',context)    

@login_required
def new_brand_category(request):
	if request.method == 'POST':
		form = CategoryBrandForm(request.POST)
	
		if form.is_valid():
			brand = form.save(commit=False)
			brand.save()

			return redirect('category_brand')
	else:
		form = CategoryBrandForm()
	
	return render(request,'brands/create_category.html', {'form': form})

@login_required
def detail_brand_category(request, pk):

	template = loader.get_template('brands/create_category.html')
	cat_brand = get_object_or_404(CategoryBrand, pk=pk)

	if request.method == 'POST':
		form = CategoryBrandForm(request.POST, instance=cat_brand)

		if form.is_valid():
			brand = form.save(commit=False)
			brand.save()

			return redirect('category_brand')

	else:
		form = CategoryBrandForm(instance=cat_brand)

	return HttpResponse(template.render({'form': form, 'is_edit': 'True'}, request))

@login_required
def delete_brand_category(request, pk):

	template = loader.get_template('brands/delete_category.html')
	cat_brand = get_object_or_404(CategoryBrand, pk=pk)

	if request.method == 'POST':
		form = DeleteCategoryBrand(request.POST, instance=cat_brand)

		if form.is_valid():
			cat_brand.delete()
			return redirect('category_brand')
	else:
		form = DeleteCategoryBrand(instance=cat_brand)
	
	return HttpResponse(template.render({'form': form, 'brand':cat_brand.name}, request))
