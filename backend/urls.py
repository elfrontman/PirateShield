from django.urls import path
from .views import marca, producto, dashboard, imagen_producto, punto_imagen


urlpatterns = [
	path('', dashboard.index, name='index'),
	path('marcas/', marca.marcas, name='marcas'),
	path('brand/new', marca.brand_new, name='brand_new'),
	path('brand/<int:pk>', marca.brand_detail, name='brand_detail'),
	path('brand/<int:pk>/delete/', marca.brand_delete, name='brand_delete'),

	path('productos', producto.productos, name='productos'),
	path('producto/new', producto.product_new, name='product_new'),
	path('producto/<int:pk>', producto.product_detail, name='product_detail'),
	path('producto/<int:pk>/delete/', producto.product_delete, name='product_delete'),

	path('producto/<int:pk>/imagen/new', imagen_producto.new, name="image_producto_new"),
	path('producto/<int:pk>/imagen/<int:pk_image_product>', imagen_producto.detail, name="image_producto_detail"),
	path('producto/<int:pk>/imagen/<int:pk_image_product>/delete/', imagen_producto.delete, name="image_producto_delete"),

	path('producto/<int:pk_product>/imagen/<int:pk_image_product>/punto/new', punto_imagen.new, name="punto_imagen_new"),
	path('producto/<int:pk_product>/imagen/<int:pk_image_product>/punto/<int:pk>', punto_imagen.detail, name="punto_imagen_detail"),
	path('producto/<int:pk_product>/imagen/<int:pk_image_product>/punto/<int:pk>/delete/', punto_imagen.delete, name="punto_imagen_delete"),


]