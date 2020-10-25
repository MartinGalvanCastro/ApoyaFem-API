# Generated by Django 3.1.2 on 2020-10-25 01:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios_API', '0010_auto_20201023_2031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarioabogado',
            name='ciudadUsuario',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='usuarios_API.ciudad'),
        ),
        migrations.AlterField(
            model_name='usuariopsicologo',
            name='ciudadUsuario',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='usuarios_API.ciudad'),
        ),
    ]
