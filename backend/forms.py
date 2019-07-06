from django.forms import ModelForm
from django.utils.translation import ugettext_lazy as _

from .models import Brand

class BrandForm(ModelForm):
	class Meta:
		model = Brand
		fields = ['name', 'logo', 'brand_category_id']

		labels = {
			"name" : _("Nombre de la marca"),
			"logo" : _("Logo de la marca"),
			"brand_category_id" : _("Categoría"),
		}