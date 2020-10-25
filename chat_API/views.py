from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from . import serializers, models
from .logic.logic_chatAPI import *

class chatListView(APIView):
    """Clase que contiene los metodos GET y POST para la sala de chat
    Args:
        APIView Herencia
    """

    serializer_class = serializers.chatSerializer

    def get(self,request,format=None):
        """Metodo GET que retorna la lista de chats
        Args:
            request ([type]): [description]
            format ([type], optional): [description]. Defaults to None.

        Returns:
            HTTP200 si el chat existe
            HTTP400 si hay algun error con algun dato
        """
        chats = getAllSalas()
        serializer = self.serializer_class(chats,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self,request):
        """Metodo POST que crea una sala de chat
        Args:
            request ([type]): [description]
        Returns:
            HTTP201 si el chat se creo
            HTTP400 si el chat no se creo
        """
        try:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                sala = crearSala(request.data)
                if not sala is None:
                    return Response(serializer.data,status=status.HTTP_201_CREATED)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ObjectDoesNotExist:
            return Response('No se encontraron los usuarios', status=status.HTTP_400_BAD_REQUEST)

class chatDetailView(APIView):
    """Clase que contiene los metodos GET y DELETE de un chat especifico
    Args:
        APIView Herencia
    """
    serializer_class = serializers.chatSerializer

    
    def get(self,request,pk,format=None):
        """Metodo GET por id
        Args:
            request ([type]): [description]
            pk: id de la sala
            format ([type], optional): [description]. Defaults to None.

        Returns:
            HTTP200 si el chat existe
            HTTP400 si hay algun error con algun dato
        """
        chat = getSalaById(pk)
        serializer = self.serializer_class(chat)
        if chat is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)

    def delete(self,request,pk):
        """Metodo DELETE
        Args:
            request ([type]): [description]
            pk ([type]): [description]

        Returns:
            HTTP202 si se elimino con exito
            HTTP404 si no se encontro el chat
        """
        chat = getSalaById(pk)
        try:
            deleteSala(pk)
            return Response(status=status.HTTP_202_ACCEPTED)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self,request,pk):
        """Metodo PUT. No soportado
        Args:
            request ([type]): [description]
            pk ([type]): [description]

        Returns:
            HTTP405
        """
        return Response('Metodo /PUT/ no soportado',status=status.HTTP_405_METHOD_NOT_ALLOWED)

class chatDetailUApoyafemView(APIView):
    """Clase que contiene el metodo GET de los chat con un usuario ApoyaFem Especifico
    Args:
        APIView Herencia
    """
    serializer_class = serializers.chatSerializer

     
    def get(self,request,pkUAF):
        """Metodo GET para un usuario apoyafem especifico
        Args:
            request ([type]): [description]
            pkUAF: id del usuario apoyafem

        Returns:
            HTTP200 si el chat existe
            HTTP400 si hay algun error con algun dato
        """
        chat = getSalasByIdApoyaFem(pkUAF)
        serializer = self.serializer_class(chat,many=True)
        try:
            if chat is not None:
                print(serializer.data)
                return Response(serializer.data,status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)



class chatDetailUAsesorView(APIView):
    """Clase que contiene el metodo GET de los chat con un usuario Asesor Especifico
    Args:
        APIView Herencia
    """
    serializer_class = serializers.chatSerializer
  
    def get(self,request,pkUA):
        """Metodo GET para un usuario apoyafem especifico
        Args:
            request ([type]): [description]
            pkUA: id del usuario apoyafem

        Returns:
            HTTP200 si el chat existe
            HTTP400 si hay algun error con algun dato
        """
        try:
            chat = getSalaByIdApoyo(pkUA)
            serializer = self.serializer_class(chat,many=True)
            if chat is not None:
                return Response(serializer.data,status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class mensageListView(APIView):
    """Clase que cocntiene el metodo GET y POST de mensaje
    Args:
        APIView Herencia
    """
    serializer_class = serializers.messageSerializer
    def get(self,request,format=None):
        """Metodo GET que retorna la lista de mensajes
        Args:
            request ([type]): [description]
            format ([type], optional): [description]. Defaults to None.

        Returns:
            HTTP200 
        """
        mensajes = getMensajes()
        serialize = self.serializer_class(mensajes,many=True)
        return Response(serialize.data,status=status.HTTP_200_OK)


    def post(self,request):
        """Metodo POST que crear un mensaje
        Args:
            request ([type]): [description]
        Returns:
            HTTP201 si el chat se creo
            HTTP400 si el chat no se creo
        """
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            try:
                createMensaje(request.data)
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            except ObjectDoesNotExist:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class mensajeDetailView(APIView):
    """Clase que contiene el metodo GET y DELETE de un mensaje espeifico
    Args:
        APIView Herencia
    """
    serializer_class = serializers.messageSerializer
    def get(self,request,pk,format=None):
        """Metodo GET por id
        Args:
            request ([type]): [description]
            pk: id del mensaje
            format ([type], optional): [description]. Defaults to None.

        Returns:
            HTTP200 si el mensaje
            HTTP400 si hay algun error con algun dato
        """
        mensaje = getMensajeById(pk)
        serializer = self.serializer_class(mensaje)
        if mensaje is not None:
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.data,status=status.HTTP_404_NOT_FOUND)

    def delete(self,request,pk):
        mensaje = getMensajeById(pk)
        serializer = self.serializer_class(mensaje)
        try:
            deleteMensaje(pk)
            return Response(status=status.HTTP_202_ACCEPTED)
        except Exception:
            return Response(serializer.errors,status=status.HTTP_404_NOT_FOUND)


    
    def put(self,request,pk):
        """Metodo PUT. No soportado
        Args:
            request ([type]): [description]
            pk ([type]): [description]

        Returns:
            HTTP405
        """
        return Response('Metodo /PUT/ no soportado',status=status.HTTP_405_METHOD_NOT_ALLOWED)

class mensajeListByChat(APIView):
    """Clase que devuelve el listado de mensajes segun la id de un chat
    Args:
        APIView ([type]): [description]
    """
    serializer_class = serializers.messageSerializer
    def get(self,request,pk,format=None):
        try:
            mensajes = getMensajeBySala(pk)
            return Response(self.serializer_class(mensajes,many=True),status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
