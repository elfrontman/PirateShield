from django.db import models
from django.utils.safestring import mark_safe
from django.contrib.auth.models import AbstractUser


# Create your models here.

class CategoryBrand(models.Model):
	name = models.CharField(max_length=250)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = "Categorias de marca"

class CategoryProduct(models.Model):
	name = models.CharField(max_length=250)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = "Categorias de producto"


class Brand(models.Model):
	name = models.CharField(max_length=250)
	logo = models.ImageField(upload_to = 'clients/', default='clients/logo_default.jpg')
	description = models.TextField()
	brand_category_id = models.ForeignKey(CategoryBrand, on_delete=models.DO_NOTHING)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = "Marcas"


class Product(models.Model):
	name = models.CharField(max_length=250)
	reference = models.CharField(max_length=250)
	brand = models.ForeignKey(Brand, on_delete=models.DO_NOTHING)
	description = models.TextField()
	image = models.ImageField(upload_to = 'clients/', default='clients/logo_default.jpg')
	product_category = models.ForeignKey(CategoryProduct, on_delete=models.DO_NOTHING)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = "Productos"


class ImageProduct(models.Model):
	name = models.CharField(max_length=250)
	image = models.ImageField(upload_to = 'products/', default='products/image_default.jpg')
	product = models.ForeignKey(Product, on_delete=models.DO_NOTHING)

	def image_tag(self):
		return mark_safe('<a href="/media/{0}"><img src="/media/{0}"></a>'.format(self.image))

	def get_create_deatail(self):
		return mark_safe('<a class="related-widget-wrapper-link add-related" href="/admin/backend/detailimageproduct/add/?_to_field=id&_popup=1&image_product={0}&url_image=/media/{1}">Agregar</a>'.format(self.id, self.image))

	image_tag.short_description = 'Image of product'
	image_tag.allow_tags = True

	get_create_deatail.short_description = 'Detalle'
	get_create_deatail.allow_tags = True


	def __str__(self):
		return self.name


class DetailImageProduct(models.Model):
	name = models.CharField(max_length=250)
	description = models.TextField()
	marker_x = models.FloatField()
	marker_y = models.FloatField()
	image_product = models.ForeignKey(ImageProduct, on_delete=models.DO_NOTHING)
	image_check = models.ImageField(upload_to='products/details', default='products/details/image_default.jpg')
	image_fail = models.ImageField(upload_to='products/details', default='products/details/image_default.jpg')

	def get_image_product(self):
		return mark_safe('<div class="select-point">'+self.image_product.image_tag()+'</div>') 

	get_image_product.short_description = 'Image of product'
	get_image_product.allow_tags = True

	class Meta:
		verbose_name_plural = "Marcadores de Detalles"


	def __str__(self):
		return self.name


class User(AbstractUser):
	brand = models.ForeignKey(Brand, on_delete=models.DO_NOTHING, blank=True, null=True)
	image = models.ImageField(upload_to = 'users/', default='users/default-avatar.png', blank=True, null=True)
	movil = models.CharField(max_length=10, blank=True, null=True)


class UserBrand(models.Model):
	brand = models.ForeignKey(Brand, on_delete=models.DO_NOTHING)
	user = models.ForeignKey(User, on_delete=models.DO_NOTHING)


class Operativo(models.Model):
	token = models.CharField(max_length=250)
	user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
	expiration = models.DateTimeField()
	first_login = models.DateTimeField(blank=True, null=True)
	last_login = models.DateTimeField(blank=True, null=True)
	is_active = models.BooleanField(default=True)