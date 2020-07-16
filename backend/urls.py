""" Agatha URLs models """

from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import ObtainAuthToken

from .views import (
    producto,
    dashboard,
    imagen_producto,
    punto_imagen,
    tools,
    usuarios,
    operativos,
    REST_view,
    informes
)


router = routers.DefaultRouter()
router.register(r'users', REST_view.UserViewSet)
router.register(r'brands', REST_view.BrandViewSet, basename='Brand')
router.register(r'product', REST_view.ProductViewSet)
router.register(r'productbybrand', REST_view.ProductList)
router.register(r'imageproduct', REST_view.ImageDetailProduct)
router.register(r'detailproduct', REST_view.DetailImageProductViewSet)
router.register(r'markerproduct', REST_view.DetailMarkerProduct)
router.register(r'categories_brand', REST_view.CategoryBrandViewSet)
router.register(r'categories_product', REST_view.CategoryProductViewSet)
#router.register(r'logout', REST_view.Logout, basename='Logout')

urlpatterns = [
    path('', dashboard.index, name='index'),
    
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

    path('herramientas/', tools.index, name="tools"),
   
    path('usuarios/', usuarios.index, name="list_usuarios"),
    path('usuarios/new', usuarios.create, name="create_usuarios"),
    path('usuarios/<int:pk>', usuarios.detail, name="detail_usuarios"),

    path('operativos/', operativos.index, name="operativos"),
    path('operativos/new', operativos.new, name="new_operativo"),
    path('operativos/<int:pk>', operativos.operativo_edit, name="detail_operativo"),
    path('operativos/invalidate/<int:pk>', operativos.invalidate, name="invalidate_operativo"),
    path('operativos/activate/<int:pk>', operativos.activate, name="activate_operativo"),
    path('operativos/chat/<int:pk>', operativos.chat, name="chat_operativo"),
    path('operativos/brand_chat/<int:pk>', operativos.chat_marca, name="chat_marca"),
    path('externalchat/<int:pk>', operativos.chat_ext_marca, name="chat_ext_marca"),
    path('operativos/connetions/<int:pk>', operativos.list_connections, name="connections"),
    path('operativos/disconnect/<int:pk>/<int:tk>', operativos.disconnect_session, name="disconnect"),
    
    path('informes', informes.index, name="informes"),
    path('informes/operativos', informes.operativos, name="informe_operativo"),

    path('', include(router.urls)),

    path('login_app/', REST_view.login_app, name="login_app"),
    path('logout/', REST_view.Logout.as_view(), name="logout"),
    path('token_chat/', REST_view.chat_token, name="chat_token"),
    path('auth/', ObtainAuthToken.as_view())



]
