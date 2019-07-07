from django.shortcuts import render
from django.forms import modelformset_factory
from django.template import loader, RequestContext
from django.http import HttpResponse, HttpResponseRedirect 
from django.shortcuts import redirect, get_object_or_404
from django.views.decorators.csrf import csrf_protect

from backend.models import Brand
from backend.forms import BrandForm, DeleteBrand

def marcas(request):
	brand_list = Brand.objects.all();
	template = loader.get_template('marcas/view_marcas.html')

	context = {
		'brand_list' : brand_list
	}

	return HttpResponse(template.render(context, request))

def brand_new(request):
	template = loader.get_template('marcas/create_marca.html')

	if request.method == 'POST':
		form = BrandForm(request.POST)
	
		if form.is_valid():
			brand = form.save(commit=False)
			brand.save()

			return redirect('marcas')
	else:
		form = BrandForm()
	
	return HttpResponse(template.render({'form': form}, request))



def brand_detail(request, pk):

	template = loader.get_template('marcas/create_marca.html')
	brand = get_object_or_404(Brand, pk=pk)

	if request.method == 'POST':
		form = BrandForm(request.POST, instance=brand)

		if form.is_valid():
			brand = form.save(commit=False)
			brand.save()

			return redirect('marcas')

	else:
		form = BrandForm(instance=brand)

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