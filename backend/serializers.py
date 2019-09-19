from backend.models import User, Brand, CategoryBrand, Product, ImageProduct, DetailImageProduct, CategoryProduct
from rest_framework import serializers



class CategoryBrandSerializer(serializers.ModelSerializer):
	class Meta:
		model = CategoryBrand
		fields = '__all__'

class CategoryProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = CategoryProduct
		fields = '__all__'

class BrandSerializer(serializers.ModelSerializer):

	brand_category_id = CategoryBrandSerializer(many=False, read_only=True)

	class Meta:
		model = Brand
		fields = ['id', 'name','logo', 'banner','description', 'brand_category_id']


class UserSerializer(serializers.ModelSerializer):
	brand = BrandSerializer(many=False, read_only=True)

	class Meta:
		model = User
		fields = ['url', 'username', 'email', 'brand']


class DetailImageProductSerializer(serializers.ModelSerializer):
	class Meta:
		model = DetailImageProduct
		fields = ('id', 'name', 'description','marker_x','marker_y','image_product','image_check','image_fail')


class ImageProductSerializer(serializers.ModelSerializer):
	detail = DetailImageProductSerializer(many=True, source='detailimageproduct_set')

	class Meta:
		model = ImageProduct
		fields = ['id','name', 'image', 'product', 'detail']


class ProductSerializer(serializers.ModelSerializer):
	brand = BrandSerializer(many=False)
	product_category = CategoryProductSerializer(many=False)
	imageproduct_set = ImageProductSerializer(many=True)

	class Meta:
		model = Product
		fields = '__all__'