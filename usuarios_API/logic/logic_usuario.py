from ..models import usuarioApoyaFem,usuarioAbogado,usuarioPsicologo,ciudad,departamento
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import User,Group
import os,json


#########################################################################################################
###########################################USUARIOS APOYAFEM#############################################
#########################################################################################################
def getAllApoyaFem():
    """Función que retorna todos los usuarios de ApoyaFem
    Returns:
        QuerySet: Los usuarios de ApoyaFem
    """
    #loadCiudades() Descomentar y solo usar si se necesitan cargar las ciudades de nuevo
    return usuarioApoyaFem.objects.all()

def getApoyaFemById(id):
    """Función qie retorna un usuario de ApoyaFem por ID
    Args:
        id (int): Id del usuario

    Returns:
        usuario: retorna un usuario si existe
        None: Si no existe el usuario no retorna nada
    """
    try:
        return usuarioApoyaFem.objects.get(id=id)
    except ObjectDoesNotExist:
        return None

def getApoyaFemByCorreo(correo):
    """Función qie retorna un usuario de ApoyaFem por Correo
    Args:
        correo (string): Correo del usuario

    Returns:
        usuario: retorna un usuario de ApoyaFem si existe
        None: Si no existe el usuario de ApoyaFem no retorna nada
    """
    try:
        return usuarioApoyaFem.objects.get(correo=correo)
    except ObjectDoesNotExist:
        return None

def getApoyaFemByAlias(alias):
    """Función qie retorna un usuario de ApoyaFem por alias
    Args:
        alias (string): alias del usuario

    Returns:
        usuario: retorna un usuario de ApoyaFem si existe
        None: Si no existe el usuario de ApoyaFem no retorna nada
    """
    try:
        return usuarioApoyaFem.objects.get(aliasUsuario=alias)
    except ObjectDoesNotExist:
        return None

def createApoyaFem(datos):
    """Crea un nuevo usuario de ApoyaFem y lo agrega al grupo
    Args:
        datos (JSON): Datos del nuevo usuario
    Returns:
        Modelo del usuario nuevo
    """
    usuarioDJ=None
    usuarioAF=None
    usuarioDJ = User.objects.create_user(username=datos['aliasUsuario'],    #Crea un usuario de Django
                                            email=datos['correo'],
                                            password=datos['contrasenia'])
         
    try:
        usuarioAF = usuarioApoyaFem(
            usuario = usuarioDJ,
            correo = datos['correo'],
            contrasenia = datos['contrasenia'],
            aliasUsuario = datos['aliasUsuario'])
        grupo = Group.objects.get(name='usuarios')
        usuarioDJ.groups.add(grupo)
    
    except Exception:
        usuarioDJ.delete()
        return None
    usuarioAF.save()
    return usuarioAF

def updateApoyaFem(datos,pk):
    """Función que actualiza el usuario de ApoyaFem en la BD
    Args:
        datos (JSON): Datos nuevos
        pk (int): Id del usuario a cambiar
    Returns:
        El nuevo usuario de ApoyaFem
    """
    usuarioAF = usuarioApoyaFem.objects.get(id=pk)
    usuarioDJ = usuarioAF.usuario
    usuarioDJ.username = datos['aliasUsuario']
    usuarioDJ.email=datos['correo']
    usuarioDJ.password = datos['contrasenia']
    usuarioAF.usuario = usuarioDJ
    usuarioAF.correo = datos['correo']
    usuarioAF.aliasUsuario = datos['aliasUsuario']
    usuarioAF.contrasenia = datos['contrasenia']
    usuarioDJ.save()
    usuarioAF.save()
    return usuarioAF


def deleteApoyaFem(pk):
    """Borra un usuario segun su plk
    Args:
        pk (int): id del usuario
    """
    usuarioAF = usuarioApoyaFem.objects.get(id=pk)
    usuarioDJ = usuarioAF.usuario
    usuarioDJ.delete()

#########################################################################################################
###########################################USUARIOS ABOGADOS#############################################
#########################################################################################################

def getAllAbogados():
    """Función que retorna todos los usuarios Abogados
    Returns:
        QuerySet: Los usuarios Abogados
    """
    return usuarioAbogado.objects.all()

def getAbogadoById(id):
    """Función qie retorna un abogado por ID
    Args:
        id (int): Id del abogado

    Returns:
        usuario: retorna un abogado si existe
        None: Si no existe el abogado no retorna nada
    """
    try:
        return usuarioAbogado.objects.get(id=id)
    except ObjectDoesNotExist:
        return None

def getAbogadoByCorreo(correo):
    """Función qie retorna un Abogado por Correo
    Args:
        correo (string): Correo del usuario

    Returns:
        usuario: retorna un abogado si existe
        None: Si no existe el abogado no retorna nada
    """
    try:
        return usuarioAbogado.objects.get(correo=correo)
    except ObjectDoesNotExist:
        return None

def getAbogadoByCiudad(ciudadP):
    """Metodo que retorna una lista de abogados por ciudad
    Args:
        ciudad (string): Nombre de la ciudad

    Returns:
        Lista de abogados
    """
    try:
        ciudadO = ciudad.objects.get(nombre=ciudadP)
        return usuarioAbogado.objects.filter(ciudadUsuario=ciudadO)
    except ObjectDoesNotExist:
        return None

def getAbogadoByDepartamento(deptoP):
    """Metodo que retorna una lista de abogados por departamento
    Args:
        depto (string): Nombre del departamento

    Returns:
        Lisa de los abogados en el departamento
    """
    ans = usuarioAbogado.objects.none()
    depto = departamento.objects.get(nombre=deptoP)
    ciudades = ciudad.objects.filter(departamento=depto)
    for ciudadIt in ciudades.iterator():
        ans |= usuarioAbogado.objects.filter(ciudadUsuario=ciudadIt)
    return ans

def createAbogado(datos):
    """Crea un nuevo usuario Abogado y lo agrega al grupo
    Args:
        datos (JSON): Datos del nuevo usuario
    Returns:
        Modelo del usuario nuevo
    """
    usuarioDJ=None
    usuarioA=None
    ciudadA = None
    usuarioDJ = User.objects.create_user(username=datos['correo'],    #Crea un usuario de Django
                                            email=datos['correo'],
                                            password=datos['contrasenia'])
    try:
        ciudadA = ciudad.objects.get(nombre = datos['ciudadUsuario'])
        usuarioA = usuarioAbogado(
            usuario = usuarioDJ,
            correo = datos['correo'],
            contrasenia = datos['contrasenia'],
            ciudadUsuario = ciudadA,
            nombre = datos['nombre'])
        grupo = Group.objects.get(name='abogados')
        usuarioDJ.groups.add(grupo)
        usuarioA.save()
    except ObjectDoesNotExist or AttributeError:
        usuarioDJ.delete()
    except Exception:
        usuarioDJ.delete()

    return usuarioA

def updateAbogado(pk,datos):
    """Metodo que actualiza la información de un abogado
    Args:
        pk (int): id del abogado
        datos (JSON): Datos nuevos

    Returns:
        [type]: [description]
    """
    correo = datos['correo']
    nombre = datos['nombre']
    contrasenia = datos['contrasenia']
    nombreCiudad = datos['ciudadUsuario']
    ciudadO= ciudad.objects.get(nombre = nombreCiudad)
    usuarioA = usuarioAbogado.objects.get(id=pk)
    usuarioDJ = usuarioA.usuario
    usuarioDJ.username = correo
    usuarioDJ.email= correo
    usuarioDJ.password = contrasenia
    usuarioA.usuario = usuarioDJ
    usuarioA.correo = correo
    usuarioA.nombre = nombre
    usuarioA.contrasenia = contrasenia
    usuarioA.ciudadUsuario = ciudadO
    usuarioDJ.save()
    usuarioA.save()
    return usuarioA

def deleteAbogado(pk):
    """Borra un usuario segun su plk
    Args:
        pk (int): id del usuario
    """
    usuarioA = usuarioAbogado.objects.get(id=pk)
    usuarioDJ = usuarioA.usuario
    usuarioDJ.delete()

#########################################################################################################
#########################################USUARIOS PSICOLOGOS#############################################
#########################################################################################################

def getAllPsicologos():
    """Función que retorna todos los usuarios Psicologos
    Returns:
        QuerySet: Los usuarios Psicologos
    """
    return usuarioPsicologo.objects.all()

def getPsicologosById(id):
    """Función qie retorna un Psicologo por ID
    Args:
        id (int): Id del Psicologo

    Returns:
        usuario: retorna un Psicologo si existe
        None: Si no existe el Psicologo no retorna nada
    """
    try:
        return usuarioPsicologo.objects.get(id=id)
    except ObjectDoesNotExist:
        return None

def getPsicologoByCorreo(correo):
    """Función qie retorna un Psicologo por Correo
    Args:
        correo (string): Correo del usuario

    Returns:
        usuario: retorna un Psicologo si existe
        None: Si no existe el Psicologo no retorna nada
    """
    try:
        return usuarioPsicologo.objects.get(correo=correo)
    except ObjectDoesNotExist:
        return None

def getPsicologosByCiudad(ciudadP):
    """Metodo que retorna una lista de Psicologos por ciudad
    Args:
        ciudad (string): Nombre de la ciudad

    Returns:
        Lista de Psicologos
    """
    try:
        ciudadO = ciudad.objects.get(nombre=ciudadP)
        return usuarioPsicologo.objects.filter(ciudadUsuario=ciudadO)
    except ObjectDoesNotExist:
        return None

def getPsicologoByDepartamento(deptoP):
    """Metodo que retorna una lista de Psicologos por departamento
    Args:
        depto (string): Nombre del departamento

    Returns:
        Lisa de los Psicologos en el departamento
    """
    ans = usuarioPsicologo.objects.none()
    depto = departamento.objects.get(nombre=deptoP)
    ciudades = ciudad.objects.filter(departamento=depto)
    for ciudadIt in ciudades.iterator():
        ans |= usuarioPsicologo.objects.filter(ciudadUsuario=ciudadIt)
    return ans

def createPsicologo(datos):
    """Crea un nuevo usuario Psicologo y lo agrega al grupo
    Args:
        datos (JSON): Datos del nuevo usuario
    Returns:
        Modelo del usuario nuevo
    """
    usuarioDJ=None
    usuarioA=None
    ciudadA = None
    usuarioDJ = User.objects.create_user(username=datos['correo'],    #Crea un usuario de Django
                                            email=datos['correo'],
                                            password=datos['contrasenia'])
    try:
        ciudadA = ciudad.objects.get(nombre = datos['ciudadUsuario'])
        usuarioA = usuarioPsicologo(
            usuario = usuarioDJ,
            correo = datos['correo'],
            contrasenia = datos['contrasenia'],
            ciudadUsuario = ciudadA,
            nombre = datos['nombre'])
        grupo = Group.objects.get(name='psicologos')
        usuarioDJ.groups.add(grupo)
        usuarioA.save()
    except ObjectDoesNotExist or AttributeError:
        usuarioDJ.delete()

    return usuarioA

def updatePsicologo(pk,datos):
    """Metodo que actualiza la información de un Psicologo
    Args:
        pk (int): id del Psicologo
        datos (JSON): Datos nuevos

    Returns:
        [type]: [description]
    """
    """Metodo que actualiza la información de un abogado
    Args:
        pk (int): id del abogado
        datos (JSON): Datos nuevos

    Returns:
        [type]: [description]
    """
    correo = datos['correo']
    nombre = datos['nombre']
    contrasenia = datos['contrasenia']
    nombreCiudad = datos['ciudadUsuario']
    ciudadO= ciudad.objects.get(nombre = nombreCiudad)
    usuarioA = usuarioPsicologo.objects.get(id=pk)
    usuarioDJ = usuarioA.usuario
    usuarioDJ.username = correo
    usuarioDJ.email= correo
    usuarioDJ.password = contrasenia
    usuarioA.usuario = usuarioDJ
    usuarioA.correo = correo
    usuarioA.nombre = nombre
    usuarioA.contrasenia = contrasenia
    usuarioA.ciudadUsuario = ciudadO
    usuarioDJ.save()
    usuarioA.save()
    return usuarioA

def deletePsicologo(pk):
    """Borra un usuario segun su plk
    Args:
        pk (int): id del usuario
    """
    usuarioA = usuarioPsicologo.objects.get(id=pk)
    usuarioDJ = usuarioA.usuario
    usuarioDJ.delete()


def loadCiudades():
    """Metodo para cargar las ciudades ay dptos a la bd
    """
    path = os.path.join(os.path.dirname(__file__),'ciudades.json')
    with open(path) as json_file:
        data = json.load(json_file)
        for dep in data:
            nombreDepartamento = dep['departamento']
            ciudades = dep['ciudades']
            nDep = departamento(nombre = nombreDepartamento)
            nDep.save()
            for ciudadIter in ciudades:
                nCiudad = ciudad(nombre = ciudadIter,
                            departamento=nDep)
                nCiudad.save()