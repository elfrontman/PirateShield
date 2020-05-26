""" Brands admin clases. """

# Django
from django.contrib import admin

#Models
from brands.models import Brand

@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    """ Brands admin """
    
    list_display = ('pk', 'name','banner', 'logo', 'description', 'created', 'modified',)
    list_display_item = ('pk',)
    list_editable = ('name','banner', 'logo', 'description',)
    search_fields = ('name',)

    list_filter = ('name', 'created', 'modified')