from django import forms
from .models import Product, CategoryProduct,ImageProduct
from django.forms.widgets import HiddenInput
from django.utils.translation import ugettext_lazy as _

class ProductForm(forms.ModelForm):
	class Meta:
		model = Product
		fields = {'name','reference','brand', 'image', 'product_category'}
		widgets= {'brand': HiddenInput()}

		labels = {
			"name" : _("Nombre del producto"),
			"reference" : _("Referencia"),
			"image" : _("Imagen"),
			"product_category" : _("Categoría"),
		}


class CategoryProductForm(forms.ModelForm):
	class Meta:
		model = CategoryProduct
		fields = ['name']

		labels = {
			"name" : _("Nombre de la Categoría"),
		}

class DeleteCategoryProduct(forms.ModelForm):
	class Meta:
		model = CategoryProduct
		fields = []

class DeleteProduct(forms.ModelForm):
	class Meta:
		model = Product
		fields = []

""" Imagenes de producto """

class ImageProductForm(forms.ModelForm):
	class Meta:
		model = ImageProduct
		fields = ['name', 'image']

		labels = {
			"name" : _("Descripción de la imagen"),
			"image" : _("Imagen"),
		}

