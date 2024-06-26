from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.shortcuts import redirect, get_object_or_404
from django.contrib.auth.decorators import login_required

from backend.models import CategoryBrand, CategoryProduct
from backend.forms import CategoryBrandForm, DeleteCategoryBrand, CategoryProductForm


@login_required
def index(request):
    return render(request, 'herramientas.html', {})


def categoria_marca(request):

    list = CategoryBrand.objects.all()
    template = loader.get_template('marcas/list_category.html')

    context = {
        'list': list
    }

    return HttpResponse(template.render(context, request))

def create_categoria_marca(request):
	template = loader.get_template('marcas/create_category.html')

	if request.method == 'POST':
		form = CategoryBrandForm(request.POST)
	
		if form.is_valid():
			brand = form.save(commit=False)
			brand.save()

			return redirect('category_brand')
	else:
		form = CategoryBrandForm()
	
	return HttpResponse(template.render({'form': form}, request))


def categoria_marca_detail(request, pk):

	template = loader.get_template('marcas/create_category.html')
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


def categoria_marca_delete(request, pk):

	template = loader.get_template('marcas/delete_category.html')
	cat_brand = get_object_or_404(CategoryBrand, pk=pk)

	if request.method == 'POST':
		form = DeleteCategoryBrand(request.POST, instance=cat_brand)

		if form.is_valid():
			cat_brand.delete()
			return redirect('category_brand')
	else:
		form = DeleteCategoryBrand(instance=cat_brand)
	
	return HttpResponse(template.render({'form': form, 'brand':cat_brand.name}, request))



def categoria_producto(request):

    list = CategoryProduct.objects.all()
    template = loader.get_template('productos/list_category.html')

    context = {
        'list': list
    }

    return HttpResponse(template.render(context, request))

def create_categoria_producto(request):
	template = loader.get_template('productos/create_category.html')

	if request.method == 'POST':
		form = CategoryProductForm(request.POST)
	
		if form.is_valid():
			brand = form.save(commit=False)
			brand.save()

			return redirect('category_producto')
	else:
		form = CategoryProductForm()
	
	return HttpResponse(template.render({'form': form}, request))


def categoria_producto_detail(request, pk):

	template = loader.get_template('productos/create_category.html')
	cat_brand = get_object_or_404(CategoryProduct, pk=pk)

	if request.method == 'POST':
		form = CategoryProductForm(request.POST, instance=cat_brand)

		if form.is_valid():
			brand = form.save(commit=False)
			brand.save()

			return redirect('category_producto')

	else:
		form = CategoryProductForm(instance=cat_brand)

	return HttpResponse(template.render({'form': form, 'is_edit': 'True'}, request))


def categoria_producto_delete(request, pk):

	template = loader.get_template('productos/delete_category.html')
	cat_brand = get_object_or_404(CategoryProduct, pk=pk)

	if request.method == 'POST':
		form = DeleteCategoryBrand(request.POST, instance=cat_brand)

		if form.is_valid():
			cat_brand.delete()
			return redirect('category_producto')
	else:
		form = DeleteCategoryBrand(instance=cat_brand)
	
	return HttpResponse(template.render({'form': form, 'brand':cat_brand.name}, request))
