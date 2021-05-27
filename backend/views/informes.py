from django.template import loader
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, get_object_or_404

from backend.models import User, Operativo, Brand, Product


@login_required
def index(request):
	template = loader.get_template('informes/index.html')
	return HttpResponse(template.render({}, request))

@login_required
def operativos(request):
	operativos = Operativo.objects.all()
	template = loader.get_template('informes/operativos.html')

	for op in operativos:
		if op.brandsList:
			brands = Brand.objects.filter(id__in=op.brandsList.split(','))
			op.brands = brands

			op.brands = ""

			for b in brands:
				op.brands += b.name + ', '

			op.brands = op.brands[:-2]
		else:
			op.brands = "Sin marcas"

		if op.productList:
			products = Product.objects.filter(id__in=op.productList.split(','))
			op.products = ""

			for p in products:
				op.products += p.name + ', '

			op.products = op.products[:-2]
		else:
			op.products = "Sin productos"

	return HttpResponse(template.render({'operativos': operativos}, request))

def chat(request, pk):
	template = loader.get_template('informes/chat_operativo.html')
	operativo = get_object_or_404(Operativo, pk=pk)
	clientes = list(operativo.operativoconnection_set.all().values_list('id', flat=True))
    
	ip_client = request.client_ip

	return HttpResponse(template.render({'usuario': request.user,'operativo': operativo, 'clientes':clientes, 'ip_client':  ip_client}, request))