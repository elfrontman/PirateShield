# Generated by Django 2.2.1 on 2020-05-16 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0030_operativoconnection_ip'),
    ]

    operations = [
        migrations.AddField(
            model_name='operativoconnection',
            name='crypto',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
    ]
