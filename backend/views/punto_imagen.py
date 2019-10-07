from django.template import loader
from django.http import HttpResponse 
from django.shortcuts import redirect, get_object_or_404

from backend.models import ImageProduct, DetailImageProduct, ImageDetailCompare
from backend.forms import DetailImageProductForm, DeleteDetailImageProduct, ImageDetailCompareForm

from pprint import pprint
from inspect import getmembers

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


def image_pointer(request, pk_product, pk_image_product, pk_mark):
	detail_image = DetailImageProduct.objects.get(pk=pk_mark)

	image_list = detail_image.imagedetailcompare_set.all()
	template = loader.get_template('punto_imagen/view_compare_images.html')

	context = {
		'images_list' : image_list,
		'mark': pk_mark,
		'product':  pk_product,
		'image_product': pk_image_product,
		'detail_image': detail_image

	}

	return HttpResponse(template.render(context, request))



def new_image(request, pk_product, pk_image_product, pk_mark):
	template = loader.get_template('punto_imagen/create_compare_image.html')
	image_product = get_object_or_404(ImageProduct, pk=pk_image_product)

	if request.method == 'POST':
		form = ImageDetailCompareForm(request.POST, request.FILES)

		pprint(request.POST)
	
		if form.is_valid():
			image = form.save(commit=False)
			image.save()

			return redirect('punto_detail_imagen', pk_product=pk_product, pk_image_product=pk_image_product, pk_mark=pk_mark)
	else:
		form = ImageDetailCompareForm(initial={'detail_image': pk_mark})
	
	return HttpResponse(template.render({'form': form, 'image': image_product, 'product': pk_product}, request))


def image_detail(request, pk, pk_mark, pk_image_product, pk_product):

	template = loader.get_template('punto_imagen/create_compare_image.html')
	image_detail = get_object_or_404(ImageDetailCompare, pk=pk)
	

	if request.method == 'POST':
		form = ImageDetailCompareForm(request.POST, request.FILES, instance=image_detail)

		pprint(request.POST)
	
		if form.is_valid():
			image = form.save(commit=False)
			image.save()

			return redirect('punto_detail_imagen', pk_product=pk_product, pk_image_product=pk_image_product, pk_mark=pk_mark)
	else:
		form = ImageDetailCompareForm(instance=image_detail)
	
	return HttpResponse(template.render({'form': form, 'image': image_detail, 'product': pk_product}, request))


def delete_detail(request, pk, pk_mark, pk_image_product, pk_product):

	template = loader.get_template('punto_imagen/delete_compare_image.html')
	image_detail = get_object_or_404(ImageDetailCompare, pk=pk)
	

	if request.method == 'POST':
		form = DeleteDetailImageProduct(request.POST, instance=image_detail)

		if form.is_valid():
			image_detail.delete()
			return redirect('punto_detail_imagen', pk_product=pk_product, pk_image_product=pk_image_product, pk_mark=pk_mark)
	else:
		form = DeleteDetailImageProduct(instance=image_detail)
	
	return HttpResponse(template.render({'form': form, 'image': image_detail, 'product': pk_product, 'image_product':pk_image_product, 'mark':pk_mark}, request))



