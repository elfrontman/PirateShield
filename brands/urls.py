""" Agatha brands URLs """
# Django
from django.urls import path

#views
from brands import views 

urlpatterns = [
    # URLs admin brands
    path(#Lista de marcas
        route='', 
        view= views.brands, 
        name='list'),
    path(# Nueva marca
        route='nuevo', 
        view= views.brand_new, 
        name='new'),
    path(# Edicion de marca
        route='editar/<int:pk>', 
        view= views.brand_edit, 
        name='edit'),
    path(# delete marca
        route='<int:pk>/eliminar/', 
        view= views.brand_delete, 
        name='delete'),
    path(# productos marca
        route = 'productos/<int:pk>',
        view = views.products_by_brand,
        name = 'products'
    ),

    # URLs admin brands category 
    path(
        route = 'categorias',
        view = views.brand_category,
        name="brand_category"
    ),
    path(
        route = 'nueva_categoria',
        view = views.new_brand_category, 
        name="new_brand_category"
    ),
    path(
        route = 'categoria/<int:pk>', 
        view = views.detail_brand_category, 
        name="detail_brand_category"
    ),
    path(
        route = 'categoria/<int:pk>/eliminar', 
        view = views.delete_brand_category, 
        name="delete_brand_category"
    ),
]