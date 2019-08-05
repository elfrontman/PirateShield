from backend.models import User, Brand, CategoryBrand, Product
from rest_framework import viewsets, generics
from backend.serializers import UserSerializer, BrandSerializer, CategoryBrandSerializer, ProductSerializer

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
	
	serializer_class = ProductSerializer
	model = serializer_class.Meta.model

	def get_queryset(self):
		brand = self.kwargs['brand']
		return  Product.objects.filter(brand=brand)