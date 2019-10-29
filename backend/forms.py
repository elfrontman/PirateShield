from django.forms import ModelForm, DateTimeField, DateInput, SelectDateWidget, DateTimeInput
from django.forms.widgets import HiddenInput
from django.utils.translation import ugettext_lazy as _

from .models import Brand, Product, ImageProduct, DetailImageProduct, CategoryBrand, CategoryProduct, User, Operativo, ImageDetailCompare, OperativoBrand

class BrandForm(ModelForm):
	class Meta:
		model = Brand
		fields = ['name', 'logo', 'banner','description', 'brand_category_id']

		labels = {
			"name" : _("Nombre de la marca"),
			"logo" : _("Logo de la marca"),
			"banner": _("Imagen de banner"),
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
		widgets= {'brand': HiddenInput()}

		labels = {
			"name" : _("Nombre del producto"),
			"reference" : _("Referencia"),
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


class ImageDetailCompareForm(ModelForm):
	class Meta:
		model = ImageDetailCompare
		fields = '__all__'
		widgets= {'detail_image': HiddenInput()}
		


class CategoryBrandForm(ModelForm):
	class Meta:
		model = CategoryBrand
		fields = ['name']

		labels = {
			"name" : _("Nombre de la Categoría"),
		}


class DeleteCategoryBrand(ModelForm):
	class Meta:
		model = CategoryBrand
		fields = []


class CategoryProductForm(ModelForm):
	class Meta:
		model = CategoryProduct
		fields = ['name']

		labels = {
			"name" : _("Nombre de la Categoría"),
		}

class DeleteCategoryProduct(ModelForm):
	class Meta:
		model = CategoryProduct
		fields = []


class UserForm(ModelForm):

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


class UserTerrenoForm(ModelForm):

	activation_date = DateTimeField(label='Operativo valido desde:', widget=DateTimeInput(attrs={'type':'date'}))
	expiration_date = DateTimeField(label='Operativo valido hasta:', widget=DateTimeInput(attrs={'type':'date'}))

	class Meta:

		model = User
		fields = ['first_name', 'last_name', 'movil', 'activation_date', 'expiration_date']
		

		labels = {
			"first_name" : _("Nombres completos"),
			"last_name" : _("Apellidos completos"),
			"movil" : _("Número de celular")
		}


class InactiveOperativo(ModelForm):
	class Meta:
		model = Operativo
		fields = []


class OperativoBrandForm(ModelForm):
	class Meta:
		model = OperativoBrand
		fields = '__all__'