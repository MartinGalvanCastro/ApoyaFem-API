# Generated by Django 3.1.2 on 2020-10-23 01:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios_API', '0004_usuariopsicologo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuarioabogado',
            old_name='aliasUsuario',
            new_name='nombre',
        ),
        migrations.RenameField(
            model_name='usuariopsicologo',
            old_name='aliasUsuario',
            new_name='nombre',
        ),
    ]
