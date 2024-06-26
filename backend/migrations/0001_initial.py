# Generated by Django 2.2.3 on 2019-07-29 19:44

import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('logo', models.ImageField(default='clients/logo_default.jpg', upload_to='clients/')),
                ('description', models.TextField()),
            ],
            options={
                'verbose_name_plural': 'Marcas',
            },
        ),
        migrations.CreateModel(
            name='CategoryBrand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
            ],
            options={
                'verbose_name_plural': 'Categorias de marca',
            },
        ),
        migrations.CreateModel(
            name='CategoryProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
            ],
            options={
                'verbose_name_plural': 'Categorias de producto',
            },
        ),
        migrations.CreateModel(
            name='UserBrand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Brand')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='backend.User')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('reference', models.CharField(max_length=250)),
                ('description', models.TextField()),
                ('image', models.ImageField(default='clients/logo_default.jpg', upload_to='clients/')),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Brand')),
                ('product_category', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='backend.CategoryProduct')),
            ],
            options={
                'verbose_name_plural': 'Productos',
            },
        ),
        migrations.CreateModel(
            name='ImageProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('image', models.ImageField(default='products/image_default.jpg', upload_to='products/')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Product')),
            ],
        ),
        migrations.CreateModel(
            name='DetailImageProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('description', models.TextField()),
                ('marker_x', models.FloatField()),
                ('marker_y', models.FloatField()),
                ('image_check', models.ImageField(default='products/details/image_default.jpg', upload_to='products/details')),
                ('image_fail', models.ImageField(default='products/details/image_default.jpg', upload_to='products/details')),
                ('image_product', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='backend.ImageProduct')),
            ],
            options={
                'verbose_name_plural': 'Marcadores de Detalles',
            },
        ),
        migrations.AddField(
            model_name='brand',
            name='brand_category_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='backend.CategoryBrand'),
        ),
        migrations.AddField(
            model_name='user',
            name='brand',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='backend.Brand'),
        ),
        migrations.AddField(
            model_name='user',
            name='groups',
            field=models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups'),
        ),
        migrations.AddField(
            model_name='user',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions'),
        ),
    ]
