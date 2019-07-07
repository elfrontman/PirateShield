# Generated by Django 2.2.1 on 2019-07-07 19:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='brand',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Brand'),
            preserve_default=False,
        ),
    ]
