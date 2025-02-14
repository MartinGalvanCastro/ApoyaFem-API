# Generated by Django 3.1.2 on 2020-10-22 23:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios_API', '0002_usuarioapoyafem'),
    ]

    operations = [
        migrations.CreateModel(
            name='usuarioAbogado',
            fields=[
                ('usuariobase_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='usuarios_API.usuariobase')),
                ('aliasUsuario', models.CharField(max_length=255)),
                ('departamentoUsuario', models.IntegerField()),
                ('ciudadUsuario', models.IntegerField()),
            ],
            bases=('usuarios_API.usuariobase',),
        ),
    ]
