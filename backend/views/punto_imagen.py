from django.shortcuts import render
from django.forms import modelformset_factory
from django.template import loader, RequestContext
from django.http import HttpResponse, HttpResponseRedirect 
from django.shortcuts import redirect, get_object_or_404

from backend.models import Product, ImageProduct, DetailImageProduct
from backend.forms import DetailImageProductForm, DeleteDetailImageProduct

from pprint import pprint

def new(request, pk_product, pk_image_product):
	template = loader.get_template('punto_imagen/create.html')
	image_product = get_object_or_404(ImageProduct, pk=pk_image_product)

	if request.method == 'POST':
		form = DetailImageProductForm(request.POST, request.FILES)

		pprint(request.POST)
	
		if form.is_valid():
			image = form.save(commit=False)
			image.image_product = image_product
			image.save()

			return redirect('image_producto_detail', pk=pk_product, pk_image_product=pk_image_product)
	else:
		form = DetailImageProductForm()
	
	return HttpResponse(template.render({'form': form, 'image': image_product, 'product': pk_product}, request))


def detail(request, pk, pk_image_product, pk_product):

	template = loader.get_template('punto_imagen/create.html')
	mark_image = get_object_or_404(DetailImageProduct, pk=pk)
	image_product = mark_image.image_product

	if request.method == 'POST':
		form = DetailImageProductForm(request.POST, request.FILES, instance=mark_image)

		pprint(request.POST)
	
		if form.is_valid():
			image = form.save(commit=False)
			image.image_product = image_product
			image.save()

			return redirect('image_producto_detail', pk=pk_product, pk_image_product=pk_image_product)
	else:
		form = DetailImageProductForm(instance=mark_image)
	
	return HttpResponse(template.render({'form': form, 'image': image_product, 'product':pk_product}, request))


def delete(request, pk, pk_image_product, pk_product):

	template = loader.get_template('punto_imagen/delete.html')
	mark_image = get_object_or_404(DetailImageProduct, pk=pk)
	image_product = mark_image.image_product

	if request.method == 'POST':
		form = DeleteDetailImageProduct(request.POST, instance=mark_image)

		if form.is_valid():
			mark_image.delete()
			return redirect('image_producto_detail', pk=pk_product, pk_image_product=pk_image_product)
	else:
		form = DeleteDetailImageProduct(instance=mark_image)
	
	return HttpResponse(template.render({'form': form, 'image': image_product,'mark_image':mark_image, 'product': pk}, request))



