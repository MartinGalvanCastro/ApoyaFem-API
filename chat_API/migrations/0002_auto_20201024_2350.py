# Generated by Django 3.1.2 on 2020-10-25 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat_API', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='salachat',
            name='tipoAsesor',
            field=models.CharField(default=0, max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='mensaje',
            name='contenido',
            field=models.CharField(max_length=255),
        ),
    ]
