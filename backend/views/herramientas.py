from django.shortcuts import render

def index(request):
	return render(request, 'herramientas.html', {})

def categoria_marca(request):
	return render(request, 'marcas/view_categories.html');
