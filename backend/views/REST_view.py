from backend.models import User, Brand, CategoryBrand, Product, ImageProduct, DetailImageProduct, Operativo
from rest_framework import viewsets, filters
from rest_framework.response import Response
from backend.serializers import UserSerializer, BrandSerializer, CategoryBrandSerializer, ProductSerializer, ImageProductSerializer, DetailImageProductSerializer
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect, get_object_or_404
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK

)
from django.http import JsonResponse

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


class DetailImageProduct(viewsets.ModelViewSet):
	filter_backends = (filters.SearchFilter,)
	search_fields = ['image_product__id']
	queryset = DetailImageProduct.objects.all()
	serializer_class = 	DetailImageProductSerializer

@csrf_exempt
def login_app(request):
	if request.method == 'POST':
		operativo = get_object_or_404(Operativo, token=request.POST['token'])

		if operativo:
			return JsonResponse({'login': 'true', 'msg': 'Active Session'}, status=HTTP_200_OK)
		else:
			return JsonResponse({'login': 'false', 'msg': 'Inactive Session'}, status=HTTP_200_OK)

		




