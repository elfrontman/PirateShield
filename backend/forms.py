from django.forms import ModelForm
from django.forms.widgets import HiddenInput
from django.utils.translation import ugettext_lazy as _

from .models import Brand, Product, ImageProduct, DetailImageProduct

class BrandForm(ModelForm):
	class Meta:
		model = Brand
		fields = ['name', 'logo', 'description', 'brand_category_id']

		labels = {
			"name" : _("Nombre de la marca"),
			"logo" : _("Logo de la marca"),
			"description": _("Descripción"),
			"brand_category_id" : _("Categoría"),
		}

class DeleteBrand(ModelForm):
	class Meta:
		model = Brand
		fields = []


class ProductForm(ModelForm):
	class Meta:
		model = Product
		fields = '__all__'

		labels = {
			"name" : _("Nombre del producto"),
			"reference" : _("Referencia"),
			"brand" : _("Marca"),
			"image" : _("Imagen"),
			"description": _("Descripción"),
			"product_category" : _("Categoría"),
		}


class DeleteProduct(ModelForm):
	class Meta:
		model = Product
		fields = []


class ImagenProductForm(ModelForm):
	class Meta:
		model = ImageProduct
		fields = ['name', 'image']

		labels = {
			"name" : _("Descripción de la imágen"),
			"image" : _("Imagen"),
		}

class DeleteImagenProduct(ModelForm):
	class Meta:
		model = ImageProduct
		fields = []


class DetailImageProductForm(ModelForm):
	class Meta:
		model = DetailImageProduct
		fields = ['name', 'description', 'marker_x', 'marker_y', 'image_check', 'image_fail']
		widgets = {'marker_x': HiddenInput(), 'marker_y': HiddenInput()}

class DeleteDetailImageProduct(ModelForm):
	class Meta:
		model = DetailImageProduct
		fields = []