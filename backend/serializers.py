from backend.models import User, Brand, CategoryBrand, Product, ImageProduct, DetailImageProduct
from rest_framework import serializers



class CategoryBrandSerializer(serializers.ModelSerializer):
	class Meta:
		model = CategoryBrand
		fields = '__all__'

class BrandSerializer(serializers.ModelSerializer):

	brand_category_id = CategoryBrandSerializer(many=False, read_only=True)

	class Meta:
		model = Brand
		fields = ['id', 'name','logo', 'description', 'brand_category_id']


class UserSerializer(serializers.ModelSerializer):
	brand = BrandSerializer(many=False, read_only=True)

	class Meta:
		model = User
		fields = ['url', 'username', 'email', 'brand']


class ProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = Product
		fields = '__all__'

class DetailImageProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = DetailImageProduct
		fields = '__all__'


class ImageProductSerializer(serializers.ModelSerializer):
	details = DetailImageProductSerializer(many=True, read_only=True)

	class Meta:
		model = ImageProduct
		fields = '__all__'