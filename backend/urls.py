from django.urls import path, include
from rest_framework import routers

from .views import marca, producto, dashboard, imagen_producto, punto_imagen, herramientas, usuarios, operativos,REST_view, informes


router = routers.DefaultRouter()
router.register(r'users', REST_view.UserViewSet)
router.register(r'brands', REST_view.BrandViewSet, basename='Brand')
router.register(r'product', REST_view.ProductViewSet)
router.register(r'productbybrand', REST_view.ProductList)
router.register(r'imageproduct', REST_view.ImageDetailProduct)
router.register(r'detailproduct', REST_view.DetailImageProductViewSet)
router.register(r'markerproduct', REST_view.DetailMarkerProduct)

urlpatterns = [
	path('', dashboard.index, name='index'),
	path('marcas/', marca.marcas, name='marcas'),
	path('brand/new', marca.brand_new, name='brand_new'),
	path('brand/<int:pk>', marca.brand_detail, name='brand_detail'),
	path('brand/<int:pk>/delete/', marca.brand_delete, name='brand_delete'),
	path('brand/<int:pk>/productos/', marca.products_by_brand, name='products_by_brand'),

	path('productos', producto.productos, name='productos'),

	path('producto/<int:pk_brand>/new', producto.product_new, name='product_new'),
	path('producto/<int:pk>', producto.product_detail, name='product_detail'),
	path('producto/<int:pk>/delete/', producto.product_delete, name='product_delete'),

	path('producto/<int:pk>/imagen/new', imagen_producto.new, name="image_producto_new"),
	path('producto/<int:pk>/imagen/<int:pk_image_product>', imagen_producto.detail, name="image_producto_detail"),
	path('producto/<int:pk>/imagen/<int:pk_image_product>/delete/', imagen_producto.delete, name="image_producto_delete"),

	path('producto/<int:pk_product>/imagen/<int:pk_image_product>/punto/new', punto_imagen.new, name="punto_imagen_new"),
	path('producto/<int:pk_product>/imagen/<int:pk_image_product>/punto/<int:pk>', punto_imagen.detail, name="punto_imagen_detail"),
	path('producto/<int:pk_product>/imagen/<int:pk_image_product>/punto/<int:pk>/delete/', punto_imagen.delete, name="punto_imagen_delete"),

	path('producto/<int:pk_product>/imagen/<int:pk_image_product>/<int:pk_mark>/detalle/', punto_imagen.image_pointer, name="punto_detail_imagen"),
	path('producto/<int:pk_product>/imagen/<int:pk_image_product>/<int:pk_mark>/detalle/new', punto_imagen.new_image, name="punto_detail_imagen_new"),
	path('producto/<int:pk_product>/imagen/<int:pk_image_product>/detalle/<int:pk_mark>/<int:pk>', punto_imagen.image_detail, name="punto_detail_imagen_detail"),
	path('producto/<int:pk_product>/imagen/<int:pk_image_product>/detalle/<int:pk_mark>/delete/<int:pk>', punto_imagen.delete_detail, name="punto_detail_imagen_delete"),

	path('herramientas/', herramientas.index, name="herramientas"),
	path('herramientas/brand/categorias/', herramientas.categoria_marca, name="category_brand"),
	path('herramientas/brand/categoria/new', herramientas.create_categoria_marca, name="new_category_brand"),
	path('herramientas/brand/categoria/<int:pk>', herramientas.categoria_marca_detail, name="detail_category_brand"),
	path('herramientas/brand/categoria/<int:pk>/delete', herramientas.categoria_marca_delete, name="categoria_marca_delete"),

	path('herramientas/producto/categorias/', herramientas.categoria_producto, name="category_producto"),
	path('herramientas/producto/categoria/new', herramientas.create_categoria_producto, name="new_category_producto"),
	path('herramientas/producto/categoria/<int:pk>', herramientas.categoria_producto_detail, name="detail_category_producto"),
	path('herramientas/producto/categoria/<int:pk>/delete', herramientas.categoria_producto_delete, name="categoria_producto_delete"),

	path('usuarios/', usuarios.index, name="list_usuarios"),
	path('usuarios/new', usuarios.create, name="create_usuarios"),
	path('usuarios/<int:pk>', usuarios.detail, name="detail_usuarios"),

	path('operativos/', operativos.index, name="operativos"),
	path('operativos/new', operativos.new, name="new_operativo"),
	path('operativos/invalidate/<int:pk>', operativos.invalidate, name="invalidate_operativo"),
	path('operativos/activate/<int:pk>', operativos.activate, name="activate_operativo"),
	path('operativos/chat/<int:pk>', operativos.chat, name="chat_operativo"),

	path('informes', informes.index, name="informes"),
	path('informes/operativos', informes.operativos, name="informe_operativo"),

	path('', include(router.urls)),

	path('login_app/', REST_view.login_app, name="login_app"),
	path('token_chat/', REST_view.chat_token, name="chat_token"),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))

	
	


]