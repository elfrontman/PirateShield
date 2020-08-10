from django import forms
from brands.models import Brand, CategoryBrand
from backend.models import User
from django.utils.translation import ugettext_lazy as _


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
