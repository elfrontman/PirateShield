""" Product views """

from django.shortcuts import render, redirect, get_object_or_404
from django.template import loader
from django.http import HttpResponse 
from django.contrib.auth.decorators import login_required
# Models
from .models import Product, CategoryProduct, ImageProduct
# Forms
from .forms import (
	CategoryProductForm, DeleteCategoryProduct, ProductForm, DeleteProduct,
	ImageProductForm)

@login_required
def products_list(request):
	product_list = Product.objects.all()
	template = loader.get_template('products/view_productos.html')

	context = {'product_list' : product_list}

	return HttpResponse(template.render(context, request))

@login_required
def product_new(request, pk_brand):
	template = loader.get_template('products/product_create.html')

	if request.method == 'POST':
		form = ProductForm(request.POST, request.FILES)
	
		if form.is_valid():
			product = form.save(commit=False)
			product.save()

			return redirect('brands:products', pk=pk_brand)
	else:
		form = ProductForm(initial={'brand': pk_brand})
	
	return HttpResponse(template.render({'form': form, 'brand': pk_brand}, request))

@login_required
def product_detail(request, pk):
	template = loader.get_template('products/product_create.html')
	product = get_object_or_404(Product, pk=pk)

	if request.method == 'POST':
		form = ProductForm(request.POST, request.FILES, instance=product)

		if form.is_valid():
			pk_brand = product.brand.pk
			product = form.save(commit=False)
			product.save()
			return redirect('brands:products', pk=pk_brand)
	else:
		form = ProductForm(instance=product)

	context = {
		'form': form, 
		'is_edit': True,
		'images': product.imageproduct_set.all(),
		'product': product,
		'brand': product.brand.pk
	}

	return HttpResponse(template.render(context, request))

@login_required
def product_delete(request, pk):
	template = loader.get_template('products/product_delete.html')
	product = get_object_or_404(Product, pk=pk)

	if request.method == 'POST':
		form = DeleteProduct(request.POST, instance=product)

		if form.is_valid():
			pk_brand = product.brand.pk
			product.delete()
			return redirect('brands:products', pk=pk_brand)
	else:
		form = DeleteProduct(instance=product)
	
	return HttpResponse(template.render({'form': form, 'product':product.name, 'brand': product.brand.pk}, request))

""" Imagenes producto """
def image_product_new(request, pk):
	template = loader.get_template('imagen_producto/create.html')
	product = get_object_or_404(Product, pk=pk)

	if request.method == 'POST':
		form = ImageProductForm(request.POST, request.FILES)
	
		if form.is_valid():
			image = form.save(commit=False)
			print(image.image)
			image.product = product
			image.save()

			return redirect('products:product_image_detail', pk=pk)
	else:
		form = ImageProductForm()
	
	return HttpResponse(template.render({'form': form, 'product':pk}, request))

def product_image_detail(request, pk, pk_image_product):
	template = loader.get_template('imagen_producto/create.html')
	image_product = get_object_or_404(ImageProduct, pk=pk_image_product)
	marks_product = image_product.detailimageproduct_set.all()

	if request.method == 'POST':
		form = ImagenProductForm(request.POST, request.FILES, instance=image_product)

		if form.is_valid():
			image = form.save(commit=False)
			image.save()

			return redirect('products:detail', pk=pk)
	else:
		form = ImageProductForm(instance=image_product)

	context = {'form': form, 
		'is_edit': True, 
		'marks': marks_product, 
		'product': pk,
		'image_product': image_product}
	
	return HttpResponse(template.render(context, request))

def product_image_delete(request, pk, pk_image_product):
	pass

""" Product Category admin """
def product_category(request):
    products = CategoryProduct.objects.all()
    template = loader.get_template('products/list_category.html')

    context = {
        'list': products
    }

    return HttpResponse(template.render(context, request))

def new_category(request):
	template = loader.get_template('products/new_category.html')

	if request.method == 'POST':
		form = CategoryProductForm(request.POST)
	
		if form.is_valid():
			brand = form.save(commit=False)
			brand.save()

			return redirect('products:categories')
	else:
		form = CategoryProductForm()
	
	return HttpResponse(template.render({'form': form}, request))


def category_detail(request, pk):
	template = loader.get_template('products/new_category.html')
	cat_brand = get_object_or_404(CategoryProduct, pk=pk)

	if request.method == 'POST':
		form = CategoryProductForm(request.POST, instance=cat_brand)

		if form.is_valid():
			brand = form.save(commit=False)
			brand.save()

			return redirect('products:categories')
	else:
		form = CategoryProductForm(instance=cat_brand)

	return HttpResponse(template.render({'form': form, 'is_edit': 'True'}, request))


def category_delete(request, pk):

	template = loader.get_template('products/delete_category.html')
	cat_product = get_object_or_404(CategoryProduct, pk=pk)

	if request.method == 'POST':
		form = DeleteCategoryProduct(request.POST, instance=cat_product)

		if form.is_valid():
			cat_product.delete()
			return redirect('product:categories')
	else:
		form = DeleteCategoryProduct(instance=cat_product)
	
	return HttpResponse(template.render({'form': form, 'product':cat_product.name}, request))
