from django import forms
from django.forms.widgets import HiddenInput
from django.utils.translation import ugettext_lazy as _

from .models import User, Product, ImageProduct, DetailImageProduct, CategoryProduct, Operativo, ImageDetailCompare, OperativoBrand

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

class DeleteProduct(forms.ModelForm):
	class Meta:
		model = Product
		fields = []

class DeleteImagenProduct(forms.ModelForm):
	class Meta:
		model = ImageProduct
		fields = []


class DetailImageProductForm(forms.ModelForm):
	class Meta:
		model = DetailImageProduct
		fields = ['name', 'description', 'marker_x', 'marker_y']
		widgets = {'marker_x': HiddenInput(), 'marker_y': HiddenInput()}


class DeleteDetailImageProduct(forms.ModelForm):
	class Meta:
		model = DetailImageProduct
		fields = []


class ImageDetailCompareForm(forms.ModelForm):
	class Meta:
		model = ImageDetailCompare
		fields = '__all__'
		widgets= {'detail_image': HiddenInput()}
		

class UserForm(forms.ModelForm):

	class Meta:
		model = User
		fields = ['username', 'password','first_name', 'last_name', 'email', 'is_active', 'brand', 'image']

		labels = {
			"username" : _("Nombre de usuario"),
			"password" : _("Contraseña"),
			"first_name" : _("Nombres completos"),
			"last_name" : _("Apellidos completos"),
			"email" : _("Correo electrónico"),
			"is_active" : _("Usuario activo"),
			"brand" : _("Marca"),
			"image" : _("Imagen de perfil")
		}

		help_texts = {
            'username': 'Necesario. 150 caracteres o menos. Letras, dígitos y @ /. / + / - / _ solamente.',
            'is_active': 'Designa si este usuario debe ser tratado como activo. Anule la selección de esto en lugar de eliminar cuentas.'
        }


class UserTerrenoForm(forms.ModelForm):

	name = forms.CharField(label='Nombre del operativo')
	description = forms.CharField(label='Descripción del operativo', widget=forms.Textarea)
	connections = forms.IntegerField(label="Cant. dispositivos en operativo")
	activation_date = forms.DateTimeField(label='Operativo valido desde:', widget=forms.DateTimeInput(attrs={'type':'date'}))
	expiration_date = forms.DateTimeField(label='Operativo valido hasta:', widget=forms.DateTimeInput(attrs={'type':'date'}))

	class Meta:

		model = User
		fields = ['name', 'description', 'first_name', 'last_name', 'movil', 'activation_date', 'expiration_date']
		

		labels = {
			"name": _("Nombre del operativo"),
			"description": _("Descripción del operativo"),
			"first_name" : _("Nombres completos"),
			"last_name" : _("Apellidos completos"),
			"movil" : _("Número de celular")
		}


class InactiveOperativo(forms.ModelForm):
	class Meta:
		model = Operativo
		fields = []


class OperativoBrandForm(forms.ModelForm):
	class Meta:
		model = OperativoBrand
		fields = '__all__'