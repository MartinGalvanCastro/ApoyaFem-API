from django.db import models
from usuarios_API.models import usuarioBase

class salaChat(models.Model):
    """Clase que representa una sala de Chat
    """
    usuarioAsesor = models.ForeignKey(usuarioBase,on_delete=models.CASCADE,related_name='usuarioAsesor')
    usuarioApoyaFem = models.ForeignKey(usuarioBase,on_delete=models.CASCADE,related_name='usuarioApoyaFem')
    tipoAsesor = models.CharField(max_length=255,blank=False,null=False)

    def __str__(self):
        return str(self.id)

class mensaje(models.Model):
    """Clase mensaje
    """
    sala = models.ForeignKey(salaChat,on_delete=models.CASCADE)
    contenido = models.CharField(max_length=255,blank=False,null=False)
    autor = models.OneToOneField(usuarioBase,on_delete=models.CASCADE,default=0)
