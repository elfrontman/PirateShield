""" Agatha brands URLs """
# Django
from django.urls import path

#views
from brands import views 

urlpatterns = [
    # URLs admin brands
    path(
        route='', 
        view= views.brands, 
        name='list'),
    path(
        route='nuevo', 
        view= views.brand_new, 
        name='new'),
    path(
        route='editar/<int:pk>', 
        view= views.brand_edit, 
        name='edit'),
    path(
        route='<int:pk>/eliminar/', 
        view= views.brand_delete, 
        name='delete'),

    # URLs admin brands category 
    
    path(
        route = 'marca/categorias/',
        view = views.brand_category,
        name="brand_category"
    ),
    path(
        route = 'marca/categoria/nueva/', 
        view = views.new_brand_category, 
        name="new_brand_category"
    ),
    path(
        route = 'marca/categoria/<int:pk>', 
        view = views.detail_brand_category, 
        name="detail_brand_category"
    ),
    path(
        route = 'marca/categoria/<int:pk>/eliminar', 
        view = views.delete_brand_category, 
        name="delete_brand_category"
    ),

]