from django.contrib import admin


from .models import CategoryBrand, CategoryProduct, Product, ImageProduct, DetailImageProduct, User, Operativo, ImageDetailCompare, OperativoConnection
from brands.models import Brand
# Register your models here.

class DetailImageProductAdmin(admin.ModelAdmin):
	list_display = ('name',)
	fields = ('name', 'image_product', 'get_image_product','marker_x','marker_y','description', 'image_check', 'image_fail')
	readonly_fields = ('get_image_product',)

	class Media:
		css = {
			'all' : ('admin/css/custom_points_input.css',)
		}
		js = ('admin/js/custom_points_input.js',)



class ImageProductAdmin(admin.TabularInline):
	model = ImageProduct
	extra = 0
	fields = ('name','image', 'image_tag')
	readonly_fields = ('image_tag',)

	class Media:
		css = {
			'all' : ('admin/css/image_product.css',)
		}

class ProductAdmin(admin.ModelAdmin):
	inlines = [ImageProductAdmin]


admin.site.register(CategoryBrand)
admin.site.register(CategoryProduct)
admin.site.register(Product, ProductAdmin)
admin.site.register(DetailImageProduct, DetailImageProductAdmin)
admin.site.register(User)
admin.site.register(Operativo)
admin.site.register(ImageDetailCompare)
admin.site.register(OperativoConnection)


admin.site.site_header = "Consola de Administración - Pirate Shield"
admin.site.site_title = "Consola de Administración - Pirate Shield"
admin.site.index_title = "Bienvenido a la Consola de Administración"