from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView



class docView(APIView):
    """Documentación de la API de ApoyaFem
    """

    def get(self,request,format=None):
        return Response(
            {'Bienvenido':'Esta es la API de ApoyaFem, se divide en dos partes. Usuarios y Chat, a continuación se mostraran las url necesarias.',
             '..........':'Recordar usar siempre \'api/\' despues de la dirección del servidor',
            'URLS para el CHAT':{
                                'Sala/':{'metodos':['GET','POST'],'descripcion Adicional':'Vista de Lista'},
                                'Sala/<id>/':{'metodos':['GET','DELETE'],'descripcion Adicional':'Vista de Detalle'},
                                'Sala/ApoyaFem/<id>/:':{'metodos':['GET'],'descripcion Adicional':'Vista de Lista por Id de un usuario tipo ApoyaFem'},
                                'Sala/Asesor/<id>/:':{'metodos':['GET'],'descripcion Adicional':'Vista de Lista por Id de un usuario tipo Abogado o Psicologo'},
                                'Mensaje/':{'metodos':['GET','POST'],'descripcion Adicional':'Vista de Lista'},
                                'Mensaje/<id>/':{'metodos':['GET','DELETE'],'descripcion Adicional':'Vista de Detalle'},
                                'Mensaje/Sala/<id>/':{'metodos':['GET'],'descripcion Adicional':'Vista de Detalle por Id de la sala'}
                                },
            'URLS para USUARIO (Reemplazar <Usuario> por el tipo de usuario)':{
                                '<Usuario>/':{'metodos':['GET','POST'],'descripcion Adicional':'Vista de Lista'},
                                '<Usuario>/<id>':{'metodos':['GET','PUT','DELETE'],'descripcion Adicional':'Vista de Detalle'},
                                '<Usuario>/correo/<correo>':{'metodos':['GET'],'descripcion Adicional':'Vista de Detalle por correo de parametro'},
                                'ApoyaFem/alias/<alias>':{'metodos':['GET'],'descripcion Adicional':'Vista de Detalle por alias. Solo disponibe para usuario apoyafem'},
                                'Abogado/ciudad/<ciudad>':{'metodos':['GET'],'descripcion Adicional':'Vista de Detalle de abogado por ciudad, Primera letra en mayusculas y tiene en cuenta las tildes.'},
                                'Psicologo/ciudad/<ciudad>':{'metodos':['GET'],'descripcion Adicional':'Vista de Detalle de psicologo por ciudad, Primera letra en mayusculay tiene en cuenta las tildes'},
                                'Abogado/departamento/<departamento>':{'metodos':['GET'],'descripcion Adicional':'Vista de Detalle de abogado por departamento, Primera letra en mayusculas y tiene en cuenta las tildes.'},
                                'Psicologo/departamento/<departamento>':{'metodos':['GET'],'descripcion Adicional':'Vista de Detalle de psicologo por departamento, Primera letra en mayuscula y tiene en cuenta las tildes'},
            },
            'NOTA ADICIONAL':'Si necestian las ciudades hay un JSON en ApoyaFemChat/usuarios_API/logic/ciudades.json'}
        )



