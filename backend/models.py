# Django
from django.db import models
from django.utils.safestring import mark_safe
from django.contrib.auth.models import AbstractUser

# Models
from brands.models import Brand, CategoryBrand
from products.models import Product, CategoryProduct, ImageProduct, DetailImageProduct, ImageDetailCompare


class User(AbstractUser):
    brand = models.ForeignKey(
        Brand, on_delete=models.DO_NOTHING, blank=True, null=True)

    image = models.ImageField(
        upload_to='users/',
        default='users/default-avatar.png', blank=True, null=True)

    movil = models.CharField(max_length=10, blank=True, null=True)
    is_user_token = models.BooleanField(default=False)

class UserBrand(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.DO_NOTHING)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)


class Operativo(models.Model):
    token = models.CharField(max_length=250)
    token_chat = models.CharField(max_length=250, blank=True)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    expiration = models.DateTimeField()
    name = models.CharField(max_length=250, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    connections = models.IntegerField(blank=True, null=True)
    first_login = models.DateTimeField(blank=True, null=True)
    last_login = models.DateTimeField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_ready = models.BooleanField(default=False)
    activation = models.DateTimeField(blank=True, null=True)
    brandsList = models.CharField(max_length=250, blank=True, null=True)
    productList = models.CharField(max_length=250, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    modified = models.DateTimeField(auto_now=True)


class OperativoBrand(models.Model):
    operativo = models.ForeignKey(Operativo, on_delete=models.DO_NOTHING)
    brand = models.ForeignKey(Brand, on_delete=models.DO_NOTHING)
    producto = models.ForeignKey(Product, on_delete=models.DO_NOTHING)
    all_prodcut = models.BooleanField()


class OperativoConnection(models.Model):
    name_user = models.CharField(max_length=250, blank=True, null=True)
    ip = models.CharField(max_length=250, blank=True, null=True)
    is_active = models.BooleanField(default=False, null=False)
    operativo = models.ForeignKey(Operativo, on_delete=models.DO_NOTHING)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, default = '0', blank=True, null=True)
