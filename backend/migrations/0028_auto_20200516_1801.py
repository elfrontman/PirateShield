# Generated by Django 2.2.1 on 2020-05-16 23:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0027_auto_20200428_0052'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='brand_category_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.CategoryBrand'),
        ),
        migrations.CreateModel(
            name='OperativoConnection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_user', models.TextField(blank=True, null=True)),
                ('operativo', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Operativo')),
            ],
        ),
    ]
