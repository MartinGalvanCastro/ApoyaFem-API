# Generated by Django 3.1.2 on 2020-10-23 17:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('usuarios_API', '0006_auto_20201022_2133'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ciudad',
            old_name='departament',
            new_name='departamento',
        ),
    ]
