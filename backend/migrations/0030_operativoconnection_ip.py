# Generated by Django 2.2.1 on 2020-05-16 23:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0029_auto_20200516_1840'),
    ]

    operations = [
        migrations.AddField(
            model_name='operativoconnection',
            name='ip',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]