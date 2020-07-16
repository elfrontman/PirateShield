""" Agatha products URLs  """

# Django
from django.urls import path

# Views
from products import views 

urlpatterns = [
    # URLs admin brands
    path(
        route='', 
        view= views.products_list, 
        name='products'),
    path(
        route = 'producto/nuevo/<int:pk_brand>',
        view = views.product_new,
        name = 'new'
    ),
    path(
        route = 'producto/detalle/<int:pk>',
        view = views.product_detail,
        name = 'detail',
    ),
    path(
        route = 'producto/borrar/<int:pk>/',
        view = views.product_detail,
        name = 'delete',
    ),
]