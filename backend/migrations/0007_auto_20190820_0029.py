# Generated by Django 2.2.4 on 2019-08-20 00:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_auto_20190819_2315'),
    ]

    operations = [
        migrations.AlterField(
            model_name='operativo',
            name='first_login',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='operativo',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
