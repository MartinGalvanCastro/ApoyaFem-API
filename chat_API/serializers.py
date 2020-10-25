from rest_framework import serializers
from . import models
from usuarios_API.models import usuarioAbogado, usuarioPsicologo

class chatSerializer(serializers.Serializer):
    """Clase que serializa el objeto Chat
    Args:
        serializers Herencia
    """
    id = serializers.IntegerField(read_only=True)
    tipoAsesor = serializers.CharField(max_length=255,read_only=True)
    usuarioApoyaFem = serializers.IntegerField(allow_null=False,write_only=True)
    usuarioAsesor = serializers.IntegerField(allow_null=False,write_only=True)


class messageSerializer(serializers.Serializer):
    """Clase que serializa el objeto Mensaje
    Args:
        serializers Herencia
    """
    id = serializers.IntegerField(read_only=True)
    contenido = serializers.CharField(max_length=255,allow_blank=False,allow_null=False)
    sala = serializers.IntegerField(allow_null=False,write_only=True)
    autor = serializers.IntegerField(allow_null=False,write_only=True)