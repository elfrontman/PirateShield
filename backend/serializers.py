from backend.models import User, Brand, CategoryBrand, Product, ImageProduct, DetailImageProduct, CategoryProduct, ImageDetailCompare, Operativo, OperativoConnection
from rest_framework import serializers

class ProductSingleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Product
		fields = '__all__'





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
	products = ProductSingleSerializer(many=True, read_only=True)

	class Meta:
		model = Brand
		fields = ['id', 'name', 'logo', 'banner', 'description', 'brand_category_id', 'products']


class UserSerializer(serializers.ModelSerializer):
	brand = BrandSerializer(many=False, read_only=True)

	class Meta:
		model = User
		fields = ['url', 'username', 'email', 'brand']

class UserAllSerializer(serializers.ModelSerializer):

	class Meta:
		model = User
		fields = '__all__'

class OperativoSerializer(serializers.ModelSerializer):
	user = UserAllSerializer(many=False, read_only=True)
	class Meta:
		model = Operativo
		fields = '__all__'

class ImageDetailCompareSerializer(serializers.ModelSerializer):
	class Meta:
		model =  ImageDetailCompare
		fields = '__all__'



class DetailImageProductSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = DetailImageProduct
		fields = ('id', 'name', 'description','marker_x','marker_y','image_product')

class DetailMarkerProductSerializer(serializers.ModelSerializer):
	detail_images = ImageDetailCompareSerializer(many=True, source='imagedetailcompare_set')

	class Meta:
		model = DetailImageProduct
		fields = ('id', 'name', 'description','marker_x','marker_y','image_product', 'detail_images', 'image_check', 'image_fail')


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

class OperativoConnectionSerializer(serializers.ModelSerializer):
	class Meta:
		model = OperativoConnection
		fields = '__all__'

