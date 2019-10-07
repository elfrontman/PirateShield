from backend.models import User, Brand, CategoryBrand, Product, ImageProduct, DetailImageProduct, Operativo
from rest_framework import viewsets, filters
from backend.serializers import UserSerializer, BrandSerializer, CategoryBrandSerializer, ProductSerializer, ImageProductSerializer, DetailImageProductSerializer, DetailMarkerProductSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_200_OK
)
from django.http import JsonResponse
from django.core import serializers
from pprint import pprint

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class  = UserSerializer


class BrandViewSet(viewsets.ModelViewSet):
	queryset = Brand.objects.all()
	serializer_class = BrandSerializer


class CategoryBrandViewSet(viewsets.ModelViewSet):
	queryset = CategoryBrand.objects.all()
	serializer_class = CategoryBrandSerializer


class ProductViewSet(viewsets.ModelViewSet):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer


class ProductList(viewsets.ModelViewSet):
	list_display = ("brand")
	search_fields = ['brand__id']
	filter_backends = (filters.SearchFilter,)
	queryset = Product.objects.all()
	serializer_class = ProductSerializer

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

		if operativo:
			user = { 'username': operativo.user.username, 'fullname': operativo.user.first_name + ' ' + operativo.user.last_name, 'avatar': operativo.user.image.url }
			return JsonResponse({'login': 'true', 'msg': 'Active Session', 'user' : user}, status=HTTP_200_OK)

		




