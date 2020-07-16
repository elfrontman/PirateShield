""" Product views """

from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse 
from django.contrib.auth.decorators import login_required

@login_required
def products_list(request):
	product_list = Product.objects.all()
	template = loader.get_template('productos/view_productos.html')

	context = {
		'product_list' : product_list
	}

	return HttpResponse(template.render(context, request))

@login_required
def product_new(request, pk_brand):
	template = loader.get_template('products/producto_create.html')

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

	template = loader.get_template('productos/product_create.html')
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

	#pprint(product.imageproduct_set.all())

	return HttpResponse(template.render({'form': form, 'is_edit': 'True', 'images': product.imageproduct_set.all(), 'product': product, 'brand': product.brand.pk}, request))

@login_required
def product_delete(request, pk):

	template = loader.get_template('productos/product_delete.html')
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

