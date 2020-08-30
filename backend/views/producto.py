from django.shortcuts import render
from django.forms import modelformset_factory
from django.template import loader, RequestContext
from django.http import HttpResponse, HttpResponseRedirect 
from django.shortcuts import redirect, get_object_or_404

from backend.models import Product, ImageProduct
from backend.forms import ProductForm, DeleteProduct

from pprint import pprint


def productos(request):
	product_list = Product.objects.all()

	template = loader.get_template('productos/view_productos.html')

	context = {
		'product_list' : product_list
	}

	return HttpResponse(template.render(context, request))


def product_new(request, pk_brand):
	template = loader.get_template('productos/create_producto.html')

	if request.method == 'POST':
		form = ProductForm(request.POST, request.FILES)
	
		if form.is_valid():
			product = form.save(commit=False)
			product.save()

			return redirect('products_by_brand', pk=pk_brand)
	else:
		form = ProductForm(initial={'brand': pk_brand})
	
	return HttpResponse(template.render({'form': form, 'brand': pk_brand}, request))


def product_detail(request, pk):

	template = loader.get_template('productos/create_producto.html')
	product = get_object_or_404(Product, pk=pk)
	

	if request.method == 'POST':
		form = ProductForm(request.POST, request.FILES, instance=product)

		if form.is_valid():
			pk_brand = product.brand.pk
			product = form.save(commit=False)
			product.save()

			return redirect('products_by_brand', pk=pk_brand)

	else:
		form = ProductForm(instance=product)

	#pprint(product.imageproduct_set.all())

	return HttpResponse(template.render({'form': form, 'is_edit': 'True', 'images': product.imageproduct_set.all(), 'product': product, 'brand': product.brand.pk}, request))


def product_delete(request, pk):

	template = loader.get_template('productos/delete_producto.html')
	product = get_object_or_404(Product, pk=pk)

	if request.method == 'POST':
		form = DeleteProduct(request.POST, instance=product)

		if form.is_valid():
			pk_brand = product.brand.pk
			product.delete()
			return redirect('products_by_brand', pk=pk_brand)
	else:
		form = DeleteProduct(instance=product)
	
	return HttpResponse(template.render({'form': form, 'product':product.name, 'brand': product.brand.pk}, request))
