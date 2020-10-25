from django.db import models
from django.contrib.auth.models import User
import os,json

class departamento(models.Model):
    """Clase que representa un departamento
    Args:
        models ([type]): [description]
    """
    nombre = models.CharField(max_length = 255, blank=False,null=False,unique=True)

    def __str__(self):
        return self.nombre

class ciudad(models.Model):
    """Clase que representa una ciudad
    Args:
        models ([type]): [description]
    """
    nombre = models.CharField(max_length = 255, blank=False,null=False)
    departamento = models.ForeignKey(departamento,on_delete=models.CASCADE)


    def __str__(self):
        return self.nombre



class usuarioBase(models.Model):
    """Clase que representa un usuario base
    Args:
        Model (Herencia): Herencia de los modelos de Django
    """

    usuario = models.OneToOneField(User,on_delete=models.CASCADE)   #Se relaciona con un usuario Default de Django 
    correo = models.EmailField(max_length=255,blank=False,null=False,unique=True)    #Correo del usuario
    contrasenia = models.CharField(max_length=255,blank=False,null=False)   #Clave del usuario

    def __str__(self):
        return str(self.id)


class usuarioApoyaFem(usuarioBase):
    """Usuario de ApoyaFem
    Args:
        usuarioBase (Herencia): Obtiene todos los atributos de usuario base
    """
    aliasUsuario=models.CharField(max_length=255,blank=False,null=False,unique=True)    #Apodo del usuario

    def __str__(self):
        return str(self.id)
    


class usuarioAbogado(usuarioBase):
    """Usuario Abogado de ApoyaFem
    Args:
        usuarioBase (Herencia): Obtiene todos los atributos de usuario base
    """
    nombre=models.CharField(max_length=255,blank=False,null=False)    #Nombre del usuario de apoyo
    ciudadUsuario = models.ForeignKey(ciudad,blank=False,null=True, on_delete=models.SET_NULL)  #Ciudad del colaborador

    def __str__(self):
        return str(self.id)


class usuarioPsicologo(usuarioBase):
    """Usuario Psicologo de ApoyaFem
    Args:
        usuarioBase (Herencia): Obtiene todos los atributos de usuario base
    """
    nombre=models.CharField(max_length=255,blank=False,null=False)    #Nombre del usuario de apoyo
    ciudadUsuario = models.ForeignKey(ciudad,blank=False,null=True, on_delete=models.SET_NULL)  #Ciudad del colaborador

    def __str__(self):
        return str(self.id)
