from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

from .models import Brand

# Create your views here.
def index(request):
	return render(request, 'dashboard.html', {})

def marcas(request):
	brand_list = Brand.objects.all();
	template = loader.get_template('marcas/view_marcas.html')

	context = {
		'brand_list' : brand_list
	}

	return HttpResponse(template.render(context, request))