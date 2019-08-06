from backend.models import User, Brand, CategoryBrand, Product, ImageProduct, DetailImageProduct
from rest_framework import viewsets, filters
from backend.serializers import UserSerializer, BrandSerializer, CategoryBrandSerializer, ProductSerializer, ImageProductSerializer, DetailImageProductSerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class  = UserSerializer


class BrandViewSet(viewsets.ModelViewSet):
	queryset = Brand.objects.all()
	serializer_class = BrandSerializer


class CategoryBrandViewSet(viewsets.ModelViewSet):
	queryset = CategoryBrand.objects.all()
	serializer_class = CategoryBrandSerializer


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

