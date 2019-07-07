from django.shortcuts import render
from django.forms import modelformset_factory
from django.template import loader, RequestContext
from django.http import HttpResponse, HttpResponseRedirect 
from django.shortcuts import redirect, get_object_or_404

from backend.models import Product, ImageProduct
from backend.forms import ImagenProductForm, DeleteImagenProduct

from pprint import pprint

def new(request, pk):
	template = loader.get_template('imagen_producto/create.html')
	product = get_object_or_404(Product, pk=pk)

	if request.method == 'POST':
		form = ImagenProductForm(request.POST, request.FILES)

		pprint(request.POST)
	
		if form.is_valid():
			image = form.save(commit=False)
			print(image.image)
			image.product = product
			image.save()

			return redirect('product_detail', pk=pk)
	else:
		form = ImagenProductForm()
	
	return HttpResponse(template.render({'form': form, 'product':pk}, request))



def detail(request, pk, pk_image_product):
	template = loader.get_template('imagen_producto/create.html')
	image_product = get_object_or_404(ImageProduct, pk=pk_image_product)
	marks_product = image_product.detailimageproduct_set.all()
	
	pprint(image_product)
	pprint(marks_product)


	if request.method == 'POST':
		form = ImagenProductForm(request.POST, request.FILES, instance=image_product)

		if form.is_valid():
			image = form.save(commit=False)
			image.save()

			return redirect('product_detail', pk=pk)
	else:
		form = ImagenProductForm(instance=image_product)
	
	return HttpResponse(template.render({'form': form, 'is_edit':'True', 'marks': marks_product, 'product': pk,'image_product': image_product}, request))


def delete(request, pk, pk_image_product):

	template = loader.get_template('imagen_producto/delete.html')
	image_product = get_object_or_404(ImageProduct, pk=pk_image_product)

	if request.method == 'POST':
		form = DeleteImagenProduct(request.POST, instance=image_product)

		if form.is_valid():
			image_product.delete()
			return redirect('product_detail', pk=pk)
	else:
		form = DeleteImagenProduct(instance=image_product)
	
	return HttpResponse(template.render({'form': form, 'image_product':image_product, 'product': pk}, request))