from django.urls import path
from . import views


urlpatterns = [
	path('', views.index, name='index'),
	path('marcas/', views.marcas, name='marcas'),
]