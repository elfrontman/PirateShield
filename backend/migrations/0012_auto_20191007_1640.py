# Generated by Django 2.2.1 on 2019-10-07 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0011_imagedetailcompare_detail_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='imagedetailcompare',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='imagedetailcompare',
            name='name',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
