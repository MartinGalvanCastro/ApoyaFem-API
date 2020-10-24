from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from . import serializers, models
from .logic.logic_usuario import *


####################################################
###############   USUARIO APOYAFEM   ###############
####################################################

class usuarioApoyaFemViewList(APIView):
    """Maneja el List de usuario ApoyaFem
    Args:
        viewsets ([type]): [description]
    """
    serializer_class = serializers.UserApoyaFemSerializer
    
    def get(self,request,format=None):
        """Metodo GET de usuario ApoyaFem
        Args:
            request ([type]): [description]
            format ([type], optional): [description]. Defaults to None.

        Returns:
            Listado de todos los usuarios de ApoyaFem
        """
        usuarios = getAllApoyaFem()
        serializer = self.serializer_class(usuarios,many=True)
        return Response(serializer.data)
    
        
    def post(self,request):
        """Metodo POST de usuario ApoyaFem
        Args:
            request (datos): [description]
        Returns:
            HTTP201 Si se creo con exito
            HTTP400 Si fallo la creación
        """
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            createApoyaFem(request.data)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class usuarioApoyaFemViewDetail(APIView):
    """Maneja el Detail de usuario ApoyaFem
    Args:
        viewsets ([type]): [description]
    """
    serializer_class = serializers.UserApoyaFemSerializer
    
    def get(self,request,pk,format=None):
        """Metodo Get By Id de Usuario ApoyaFem
        Args:
            request ([type]): [description]
            pk ([type]): [description]
            format ([type], optional): [description]. Defaults to None.

        Returns:
            HTTP200 si se encontro
            HTTP404 si no se encontro
        """
        usuario = getApoyaFemById(pk)
        serializer = self.serializer_class(usuario)
        if usuario is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)
        
    def put(self,request,pk,format=None):
        """Metodo para actualizar el registrod e un usuario de ApoyaFem
        Args:
            request ([type]): [description]
            pk ([type]): [description]
            format ([type], optional): [description]. Defaults to None.

        Returns:
            HTTP202 si se aceptaron los cambios
            HTTP404 si no se encontro el usuario
            HTTP400 si los datos no estan bien 
        """
        usuario = getApoyaFemById(pk)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            try:
                updateApoyaFem(request.data,pk)
                return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
            except Exception:
                return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

    def delete(self,request,pk,format=None):
        """Función para eliminar un usuario de ApoyaFem
        Args:
            request ([type]): [description]
            pk (id): Id del usuario a eliminar
            format ([type], optional): [description]. Defaults to None.
        Returns:
            HTTP202 si se elimino con exito
            HTTP404 si no se encontro el usuario
        """
        usuario = getApoyaFemById(pk)
        serializer = self.serializer_class(usuario)
        try:
            deleteApoyaFem(pk)
            return Response(status=status.HTTP_202_ACCEPTED)
        except Exception:
            return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)

class usuarioApoyaFemEmailDetail(APIView):
    """Clase para obtener el usuario por Email
    Args:
        APIView ([type]): [description]
    """
    serializer_class = serializers.UserApoyaFemSerializer

    def get(self,request,email):
        """Metodo Get By Email de usuario ApoyaFem

        Args:
            request ([type]): [description]
            email ([type]): [description]

        Returns:
            HTTP200 si se encontro
            HTTP404 si no se encontro
        """
        usuario = getApoyaFemByCorreo(email)
        serializer = self.serializer_class(usuario)
        if usuario is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)

class usuarioApoyaFemUsernameDetail(APIView):
    """Clase para obtener el usuario por Alias
    Args:
        APIView ([type]): [description]
    """
    serializer_class = serializers.UserApoyaFemSerializer

    def get(self,request,username):
        """Metodo Get By alias de usuario ApoyaFem

        Args:
            request ([type]): [description]
            alias ([type]): [description]

        Returns:
            HTTP200 si se encontro
            HTTP404 si no se encontro
        """
        usuario = getApoyaFemByAlias(username)
        serializer = self.serializer_class(usuario)
        if usuario is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)


####################################################
###############   USUARIO ABOGADO   ###############
####################################################

class usuarioAbogadoViewList(APIView):
    """Maneja el List de usuario Abogado
    Args:
        viewsets ([type]): [description]
    """
    serializer_class = serializers.UserAbogadoSerializer
    
    def get(self,request,format=None):
        """Metodo GET de usuario Abogado
        Args:
            request ([type]): [description]
            format ([type], optional): [description]. Defaults to None.

        Returns:
            Listado de todos los usuarios de Abogado
        """
        usuarios = getAllAbogados()
        serializer = self.serializer_class(usuarios,many=True)
        return Response(serializer.data)
    
        
    def post(self,request):
        """Metodo POST de usuario Abogado
        Args:
            request (datos): [description]
        Returns:
            HTTP201 Si se creo con exito
            HTTP400 Si fallo la creación
        """
        try:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                createAbogado(request.data)
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class usuarioAbogadoViewDetail(APIView):
    """Maneja el Detail de usuario Abogado
    Args:
        viewsets ([type]): [description]
    """
    serializer_class = serializers.UserAbogadoSerializer
    
    def get(self,request,pk,format=None):
        """Metodo Get By Id de Usuario Abogado
        Args:
            request ([type]): [description]
            pk ([type]): [description]
            format ([type], optional): [description]. Defaults to None.

        Returns:
            HTTP200 si se encontro
            HTTP404 si no se encontro
        """
        usuario = getAbogadoById(pk)
        serializer = self.serializer_class(usuario)
        if usuario is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)
        
    def put(self,request,pk,format=None):
        """Metodo para actualizar el registrod e un usuario de Abogado
        Args:
            request ([type]): [description]
            pk ([type]): [description]
            format ([type], optional): [description]. Defaults to None.

        Returns:
            HTTP202 si se aceptaron los cambios
            HTTP404 si no se encontro el usuario
            HTTP400 si los datos no estan bien 
        """
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            try:
                updateAbogado(pk,request.data)
                return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
            except ObjectDoesNotExist:
                return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

    def delete(self,request,pk,format=None):
        """Función para eliminar un usuario de Abogado
        Args:
            request ([type]): [description]
            pk (id): Id del usuario a eliminar
            format ([type], optional): [description]. Defaults to None.
        Returns:
            HTTP202 si se elimino con exito
            HTTP404 si no se encontro el usuario
        """
        usuario = getAbogadoById(pk)
        serializer = self.serializer_class(usuario)
        try:
            deleteAbogado(pk)
            return Response(status=status.HTTP_202_ACCEPTED)
        except Exception:
            return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)

class usuarioAbogadoEmailDetail(APIView):
    """Clase para obtener el usuario por Email
    Args:
        APIView ([type]): [description]
    """
    serializer_class = serializers.UserAbogadoSerializer

    def get(self,request,email):
        """Metodo Get By Email de usuario Abogado

        Args:
            request ([type]): [description]
            email ([type]): [description]

        Returns:
            HTTP200 si se encontro
            HTTP404 si no se encontro
        """
        usuario = getAbogadoByCorreo(email)
        serializer = self.serializer_class(usuario)
        if usuario is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)

class usuarioAbogadoCiudadDetail(APIView):
    """Clase para obtener el abogados por ciudad
    Args:
        APIView ([type]): [description]
    """
    serializer_class = serializers.UserAbogadoSerializer

    def get(self,request,ciudad):
        """Metodo Get By ciudad de Abogado

        Args:
            request ([type]): [description]
            ciudad ([type]): [description]

        Returns:
            HTTP200 si se encontro
            HTTP404 si no se encontro
        """
        usuario = getAbogadoByCiudad(ciudad)
        serializer = self.serializer_class(usuario,many=True)
        if usuario is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)

class usuarioAbogadoDepartamentoDetail(APIView):
    """Clase para obtener el abogados por dpto
    Args:
        APIView ([type]): [description]
    """
    serializer_class = serializers.UserAbogadoSerializer

    def get(self,request,dpto):
        """Metodo Get By ciudad de Abogado

        Args:
            request ([type]): [description]
            dpto ([type]): [description]

        Returns:
            HTTP200 si se encontro
            HTTP404 si no se encontro
        """
        usuario = getAbogadoByDepartamento(dpto)
        serializer = self.serializer_class(usuario,many=True)
        if usuario is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)


####################################################
###############   USUARIO PSICOLOGO   ###############
####################################################

class usuarioPsicologoViewList(APIView):
    """Maneja el List de usuario Psicologo
    Args:
        viewsets ([type]): [description]
    """
    serializer_class = serializers.UserPsicologoSerializer
    
    def get(self,request,format=None):
        """Metodo GET de usuario Psicologo
        Args:
            request ([type]): [description]
            format ([type], optional): [description]. Defaults to None.

        Returns:
            Listado de todos los usuarios de Psicologo
        """
        usuarios = getAllPsicologos()
        serializer = self.serializer_class(usuarios,many=True)
        return Response(serializer.data)
    
        
    def post(self,request):
        """Metodo POST de usuario Psicologo
        Args:
            request (datos): [description]
        Returns:
            HTTP201 Si se creo con exito
            HTTP400 Si fallo la creación
        """
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            createPsicologo(request.data)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class usuarioPsicologoViewDetail(APIView):
    """Maneja el Detail de usuario Psicologo
    Args:
        viewsets ([type]): [description]
    """
    serializer_class = serializers.UserPsicologoSerializer
    
    def get(self,request,pk,format=None):
        """Metodo Get By Id de Usuario Psicologo
        Args:
            request ([type]): [description]
            pk ([type]): [description]
            format ([type], optional): [description]. Defaults to None.

        Returns:
            HTTP200 si se encontro
            HTTP404 si no se encontro
        """
        usuario = getPsicologosById(pk)
        serializer = self.serializer_class(usuario)
        if usuario is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)
        
    def put(self,request,pk,format=None):
        """Metodo para actualizar el registrod e un usuario de Psicologo
        Args:
            request ([type]): [description]
            pk ([type]): [description]
            format ([type], optional): [description]. Defaults to None.

        Returns:
            HTTP202 si se aceptaron los cambios
            HTTP404 si no se encontro el usuario
            HTTP400 si los datos no estan bien 
        """
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            try:
                updatePsicologo(pk,request.data)
                return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
            except ObjectDoesNotExist:
                return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

    def delete(self,request,pk,format=None):
        """Función para eliminar un usuario de Psicologo
        Args:
            request ([type]): [description]
            pk (id): Id del usuario a eliminar
            format ([type], optional): [description]. Defaults to None.
        Returns:
            HTTP202 si se elimino con exito
            HTTP404 si no se encontro el usuario
        """
        usuario = getPsicologosById(pk)
        serializer = self.serializer_class(usuario)
        try:
            deletePsicologo(pk)
            return Response(status=status.HTTP_202_ACCEPTED)
        except Exception:
            return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)

class usuarioPsicologoEmailDetail(APIView):
    """Clase para obtener el usuario por Email
    Args:
        APIView ([type]): [description]
    """
    serializer_class = serializers.UserPsicologoSerializer

    def get(self,request,email):
        """Metodo Get By Email de usuario Psicologo

        Args:
            request ([type]): [description]
            email ([type]): [description]

        Returns:
            HTTP200 si se encontro
            HTTP404 si no se encontro
        """
        usuario = getPsicologoByCorreo(email)
        serializer = self.serializer_class(usuario)
        if usuario is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)

class usuarioPsicologoCiudadDetail(APIView):
    """Clase para obtener el Psicologo por ciudad
    Args:
        APIView ([type]): [description]
    """
    serializer_class = serializers.UserPsicologoSerializer

    def get(self,request,ciudad):
        """Metodo Get By ciudad de Abogado

        Args:
            request ([type]): [description]
            ciudad ([type]): [description]

        Returns:
            HTTP200 si se encontro
            HTTP404 si no se encontro
        """
        usuario = getPsicologosByCiudad(ciudad)
        serializer = self.serializer_class(usuario,many=True)
        if usuario is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)

class usuarioPsicologoDepartamentoDetail(APIView):
    """Clase para obtener el Psicologo por dpto
    Args:
        APIView ([type]): [description]
    """
    serializer_class = serializers.UserAbogadoSerializer

    def get(self,request,dpto):
        """Metodo Get By ciudad de Abogado

        Args:
            request ([type]): [description]
            dpto ([type]): [description]

        Returns:
            HTTP200 si se encontro
            HTTP404 si no se encontro
        """
        usuario = getPsicologoByDepartamento(dpto)
        serializer = self.serializer_class(usuario,many=True)
        if usuario is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)