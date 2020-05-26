""" Brand Models """

from django.db import models

class CategoryBrand(models.Model):
    """ Brand Model """
    name = models.CharField(max_length=250)
    created = models.DateTimeField(auto_now=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Categorias de marca"


class Brand(models.Model):
    name = models.CharField(max_length=250)
    logo = models.ImageField(
        upload_to='clients/', default='clients/logo_default.jpg')

    banner = models.ImageField(
        upload_to='clients/', default='clients/logo_default.jpg')

    description = models.TextField()
    brand_category_id = models.ForeignKey(CategoryBrand, on_delete=models.CASCADE)

    created = models.DateTimeField(auto_now=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Marcas"

