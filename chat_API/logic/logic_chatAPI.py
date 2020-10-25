from ..models import salaChat,mensaje
from usuarios_API.logic import logic_usuario
from django.contrib.auth.models import User,Group
from django.core.exceptions import ObjectDoesNotExist
import os,json

#########################################################################################################
#                                             SALA DE CHAT                                              #
#########################################################################################################

def getAllSalas():
    """Retorna todas las salas de chatr
    Returns:
        Retornal al lista de salas de chat
    """
    return salaChat.objects.all()


def getSalaById(id):
    """Retorna todas las salas de chatr
    Returns:
        Retornal al lista de salas de chat
    """
    try:
        return salaChat.objects.get(id=id)
    except ObjectDoesNotExist:
        return None


def getSalasByIdApoyaFem(id):
    """Metodo que retorna la salas de chat para un usuario de apoyafem
    Args:
        id ([type]): [description]

    Raises:
        ObjectDoesNotExist: [description]

    Returns:
        [type]: [description]
    """
    usuarioAF = logic_usuario.getApoyaFemById(id)
    if usuarioAF is None:
        raise ObjectDoesNotExist()
    else:
        print(salaChat.objects.filter(usuarioApoyaFem=usuarioAF))
        return salaChat.objects.filter(usuarioApoyaFem=usuarioAF)
        

def getSalaByIdApoyo(id):
    """Metodo que retorna la salas de chat para un usuario de apoyo
    Args:
        id: Id del usuario de apoyo
    Raises:
        ObjectDoesNotExist: Si el usuario no existe
    Returns:
        Lista de chats
    """
    usuarioP = logic_usuario.getPsicologoById(id)
    usuarioA = logic_usuario.getAbogadoById(id)

    
    if usuarioA is None and usuarioP is None:
        raise ObjectDoesNotExist()
    elif usuarioA is None and not(usuarioP is None):
        try:
            return salaChat.objects.filter(usuarioAsesor=usuarioP)
        except ObjectDoesNotExist:
            return None
    else:
        try:
            return salaChat.objects.filter(usuarioAsesor=usuarioA)
        except ObjectDoesNotExist:
            return None
        

def crearSala(datos):
    """Metodo para crear una sala de chat
    Args:
        datos JSON: Datos para crear una nueva sala
    Raises:
        ObjectDoesNotExist: Alguno de los usuarios participantes no existe
    Returns:
        La sala de chat
    """
    usuarioAF=None
    usuarioApoyo=None
    idUApoyaFem = datos['usuarioApoyaFem']
    idUApoyo = datos['usuarioAsesor']
    usuarioAF = logic_usuario.getApoyaFemById(idUApoyaFem)
    usuarioApoyo = logic_usuario.getAbogadoById(idUApoyo)
    tipo = 'Abogado'
    salasAF = getSalasByIdApoyaFem(idUApoyaFem)
    salasApoyo = getSalaByIdApoyo(idUApoyo)
    if usuarioApoyo is None:
        usuarioApoyo = logic_usuario.getPsicologoById(idUApoyo)
        tipo = 'Psicologo'
    
    if usuarioAF is None or usuarioApoyo is None:
        raise ObjectDoesNotExist()
    
    existeSala = salasAF & salasApoyo
    if existeSala.count()==0:
        sala = salaChat(usuarioAsesor=usuarioApoyo,
                        usuarioApoyaFem = usuarioAF,
                        tipoAsesor = tipo )
        sala.save()
        return sala
    else:
        return None


def deleteSala(pk):
    """Metod para eliminar una sala de chat
    Args:
        id: Id de la sala a eliminar 
    """
    sala=salaChat.objects.get(id=pk)
    sala.delete()


#########################################################################################################
#                                              MENSAJE                                                  #
#########################################################################################################

def getMensajes():
    """Metodo que retornal todos los mensajes en la BD
    Returns:
        Listado de mensajes
    """
    return mensaje.objects.all()

def getMensajeById(id):
    """Metodo que retorna un mensaje por la id
    Args:
        id del mensaje
    Returns:
        mensaje
    """
    try:
        return mensaje.objects.get(id=id)
    except ObjectDoesNotExist:
        return None

def getMensajeBySala(id):
    """Metodo que retorna todos los mensajes de una sala
    Args:
        id: Id de la sala
    Raises:
        ObjectDoesNotExist: Si la sala no existe

    Returns:
        Listado de las salas en el chat
    """
    salaChat = getSalaById(id)
    if salaChat is not None:
        return mensaje.objects.filter(sala=salaChat)
    else:
        raise ObjectDoesNotExist

def createMensaje(datos):
    """Crea un mensaje
    Args:
        datos JSON: Datos para crear la sala
    Raises:
        ObjectDoesNotExist: [description]
    Returns:
        Nuevo mensaje
    """
    contenido = datos['contenido']
    sala = getSalaById(datos['sala'])
    autorM = logic_usuario.getUsuarioBase(datos['autor'])
    if (sala is None):
        raise ObjectDoesNotExist()
    elif sala.usuarioAsesor==autorM or sala.usuarioApoyaFem==autorM:
        mensajeN = mensaje(contenido=contenido,
                           sala=sala,
                           autor = autorM)
        mensajeN.save()
        return mensajeN
    else:
        raise ObjectDoesNotExist


def deleteMensaje(id):
    """Metodo para eliminar un mensaje
    Args:
        id ([type]): [description]
    """
    mensajeN = mensaje.objects.get(id=id)
    mensajeN.delete()