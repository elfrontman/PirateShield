from backend.models import User, Brand, CategoryBrand, Product, ImageProduct, DetailImageProduct, Operativo, CategoryProduct
from rest_framework import viewsets, filters
from backend.serializers import UserSerializer, BrandSerializer, CategoryBrandSerializer, ProductSerializer, ImageProductSerializer, DetailImageProductSerializer, DetailMarkerProductSerializer, CategoryProductSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_401_UNAUTHORIZED
)
from django.http import JsonResponse
from datetime import datetime
from pprint import pprint


class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class  = UserSerializer


class BrandViewSet(viewsets.ModelViewSet):
	queryset = Brand.objects.all()
	serializer_class = BrandSerializer

	def get_queryset(self):
		token = self.request.query_params.get('token')

		operativo = Operativo.objects.get(token=token)
		brandsList = operativo.brandsList
		
		if brandsList:
			brands = Brand.objects.filter(id__in=brandsList.split(','))
			
			return brands

		return None
		


class CategoryBrandViewSet(viewsets.ModelViewSet):
	queryset = CategoryBrand.objects.all()
	serializer_class = CategoryBrandSerializer


class CategoryProductViewSet(viewsets.ModelViewSet):
	queryset = CategoryProduct.objects.all()
	serializer_class = CategoryProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer


class ProductList(viewsets.ModelViewSet):
	list_display = ("brand")
	search_fields = ['brand__id']
	filter_backends = (filters.SearchFilter,)
	queryset = Product.objects.all()
	serializer_class = ProductSerializer

	def get_queryset(self):
		token = self.request.query_params.get('token')

		operativo = Operativo.objects.get(token=token)
		productList = operativo.productList
		
		if productList:
			brands = Product.objects.filter(id__in=productList.split(','))
			
			return brands

		return Product.objects.all()

class ImageDetailProduct(viewsets.ModelViewSet):
	queryset = ImageProduct.objects.all()
	serializer_class = ImageProductSerializer


class DetailImageProductViewSet(viewsets.ModelViewSet):
	filter_backends = (filters.SearchFilter,)
	search_fields = ['image_product__id']
	queryset = DetailImageProduct.objects.all()
	serializer_class = 	DetailImageProductSerializer

class DetailMarkerProduct(viewsets.ModelViewSet):
	filter_backends = (filters.SearchFilter,)
	search_fields = ['id']
	queryset = DetailImageProduct.objects.all()
	serializer_class = DetailMarkerProductSerializer






@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login_app(request):
	if request.method == 'POST':

		operativo = get_object_or_404(Operativo, token=request.data.get('token'))


		if operativo and operativo.is_active:
			if operativo.is_ready:
				user = { 'username': operativo.user.username, 'fullname': operativo.user.first_name + ' ' + operativo.user.last_name, 'avatar': operativo.user.image.url }
				return JsonResponse({'login': 'true', 'msg': 'Active Session', 'user' : user}, status=HTTP_200_OK)
			else:
				operativo.is_active = False
				operativo.save()
				return JsonResponse({'error': 'true', 'msg': 'Token invalido'}, status=HTTP_401_UNAUTHORIZED)

		else:
			return JsonResponse({'error': 'true', 'msg': 'Token invalido'}, status=HTTP_401_UNAUTHORIZED)


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def chat_token(request):
	operativo = get_object_or_404(Operativo, token=request.data.get('token'))

	pprint(operativo.token_chat)

	if not operativo.token_chat:
		operativo.token_chat = request.data.get('token_chat')
		operativo.save()

		return JsonResponse({'created': True}, status=HTTP_200_OK)

	return JsonResponse({'created': False, 'token': operativo.token_chat}, status=HTTP_200_OK)

		




