from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken import views as auth_views

from rest_framework.routers import DefaultRouter

from . import views


urlpatterns = [
    #URLS ApoyaFem
    url(r'^ApoyaFem/(?P<pk>[1-9]*)',views.usuarioApoyaFemViewDetail.as_view()),
    url(r'^ApoyaFem/$', views.usuarioApoyaFemViewList.as_view()),
    url(r'^ApoyaFem/correo/(?P<email>[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)',views.usuarioApoyaFemEmailDetail.as_view()),
    url(r'^ApoyaFem/alias/(?P<username>[a-zA-Z0-9_.+-]*)',views.usuarioApoyaFemUsernameDetail.as_view()),

    #URLS Abogado
    url(r'^Abogado/$',views.usuarioAbogadoViewList.as_view()),
    url(r'^Abogado/(?P<pk>[1-9]+)$',views.usuarioAbogadoViewDetail.as_view()),
    url(r'^Abogado/correo/(?P<email>[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)',views.usuarioAbogadoEmailDetail.as_view()),
    url(r'^Abogado/ciudad/(?P<ciudad>[a-zA-Z\u00E0-\u00FC]+)',views.usuarioAbogadoCiudadDetail.as_view()),
    url(r'^Abogado/departamento/(?P<dpto>[a-zA-Z\u00E0-\u00FC ]+)',views.usuarioAbogadoDepartamentoDetail.as_view()),

    #URLS Psicologo

    url(r'^Psicologo/$',views.usuarioPsicologoViewList.as_view()),
    url(r'^Psicologo/(?P<pk>[1-9]+)$',views.usuarioPsicologoViewDetail.as_view()),
    url(r'^Psicologo/correo/(?P<email>[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)',views.usuarioPsicologoEmailDetail.as_view()),
    url(r'^Psicologo/ciudad/(?P<ciudad>[a-zA-Z\u00E0-\u00FC]+)',views.usuarioPsicologoCiudadDetail.as_view()),
    url(r'^Psicologo/departamento/(?P<dpto>[a-zA-Z\u00E0-\u00FC ]+)',views.usuarioPsicologoDepartamentoDetail.as_view()),



    #Token
    url('token/', auth_views.obtain_auth_token),
]
