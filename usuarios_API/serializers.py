from rest_framework import serializers
from . import models


class UserApoyaFemSerializer(serializers.Serializer):
    """Serializador para usuarios ApoyaFem
    Args:
        serializers (Herencia) 
    """
    id = serializers.IntegerField(read_only=True)
    aliasUsuario = serializers.CharField(max_length=255,allow_blank=False,allow_null=False)
    correo = serializers.EmailField(max_length=255,allow_blank=False,allow_null=False)
    contrasenia = serializers.CharField(max_length=255,allow_blank=False,allow_null=False,write_only=True)


class UserAbogadoSerializer(serializers.Serializer):
    """Serializador para usuarios ApoyaFem
    Args:
        serializers (Herencia) 
    """
    id = serializers.IntegerField(read_only=True)
    correo = serializers.EmailField(max_length=255,allow_blank=False,allow_null=False)
    contrasenia = serializers.CharField(max_length=255,allow_blank=False,allow_null=False,write_only=True)
    nombre = serializers.CharField(max_length=255,allow_blank=False,allow_null=False)
    ciudadUsuario = serializers.CharField(max_length=255,allow_blank=False,allow_null=False)
    descripcion = serializers.CharField(max_length=10000,allow_blank=False,allow_null=False)
    fotoPerfil = serializers.CharField(max_length=1000,allow_blank=False,allow_null=False)


class UserPsicologoSerializer(serializers.Serializer):
    """Serializador para usuarios ApoyaFem
    Args:
        serializers (Herencia) 
    """
    id = serializers.IntegerField(read_only=True)
    correo = serializers.EmailField(max_length=255,allow_blank=False,allow_null=False)
    contrasenia = serializers.CharField(max_length=255,allow_blank=False,allow_null=False,write_only=True)
    nombre = serializers.CharField(max_length=255,allow_blank=False,allow_null=False)
    ciudadUsuario = serializers.CharField(max_length=255,allow_blank=False,allow_null=False)
    descripcion = serializers.CharField(max_length=10000,allow_blank=False)
    fotoPerfil = serializers.CharField(max_length=1000,allow_blank=False,allow_null=False)
    