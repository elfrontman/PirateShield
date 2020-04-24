from django import forms
from django.forms.widgets import HiddenInput
from django.utils.translation import ugettext_lazy as _

from .models import Brand, User, Product, ImageProduct, DetailImageProduct, CategoryBrand, CategoryProduct, Operativo, ImageDetailCompare, OperativoBrand

from pprint import pprint

class BrandForm(forms.ModelForm):
	first_name = forms.CharField(label='Nombres del contacto', required=True)
	last_name = forms.CharField(label='Apellidos del contacto', required=True)
	email = forms.EmailField( required=True)
	phone_number = forms.CharField(label='Celular del contacto', required=True, max_length=20)

	class Meta:
		model = Brand
		fields = ['name', 'logo', 'banner','description', 'brand_category_id', 'first_name', 'last_name', 'email','phone_number']

		labels = {
			"name" : "Nombre de la marca",
			"logo" : "Logo de la marca",
			"banner": "Imagen de banner",
			"description": "Descripción",
			"brand_category_id" : "Categoría",
		}

	def clean_email(self):
		""" User email must be unique """
		email = self.cleaned_data['email']
		qu = User.objects.filter(email=email)
		
		if qu.exists():
			raise forms.ValidationError('El email ya se encuentra registrado.')
		return email

class DeleteBrand(forms.ModelForm):
	class Meta:
		model = Brand
		fields = []


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


class ImagenProductForm(forms.ModelForm):
	class Meta:
		model = ImageProduct
		fields = ['name', 'image']

		labels = {
			"name" : _("Descripción de la imágen"),
			"image" : _("Imagen"),
		}

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
		


class CategoryBrandForm(forms.ModelForm):
	class Meta:
		model = CategoryBrand
		fields = ['name']

		labels = {
			"name" : "Nombre de la Categoría",
		}


class DeleteCategoryBrand(forms.ModelForm):
	class Meta:
		model = CategoryBrand
		fields = []


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