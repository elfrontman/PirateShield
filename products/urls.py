""" Agatha products URLs  """

# Django
from django.urls import path

# Views
from products import views 

urlpatterns = [
    # URLs admin products
    path(
        route='', 
        view= views.products_list, 
        name='products'),
    path(
        route = 'nuevo/<int:pk_brand>',
        view = views.product_new,
        name = 'new'
    ),
    path(
        route = 'detalle/<int:pk>',
        view = views.product_detail,
        name = 'detail',
    ),
    path(
        route = 'borrar/<int:pk>/',
        view = views.product_delete,
        name = 'delete',
    ),
    # Imagenes producto
    path(
        route = 'imagenes/producto/<int:pk>/nuevo',
        view = views.image_product_new,
        name = 'images_product_new',
    ),
    path(
        route = 'producto/<int:pk>/imagen_detalle/<int:pk_image_product>',
        view = views.product_image_detail,
        name = 'product_image_detail',
    ),
    path(
        route = 'producto/<int:pk>/eliminar/<int:pk_image_product>',
        view = views.product_image_delete,
        name = 'product_image_delete',
    ),
    # URLs tools general products
    path(
        route = 'categorias',
        view = views.product_category,
        name = 'categories',
    ),
    path(
        route = 'nueva_categoria',
        view = views.new_category,
        name = 'new_category',
    ),
    path(
        route = 'detalle_categoria/<int:pk>',
        view = views.category_detail,
        name = 'category_detail',
    ),
    path(
        route = 'eliminar_categoria/<int:pk>',
        view = views.category_delete,
        name = 'category_delete',
    ),
]