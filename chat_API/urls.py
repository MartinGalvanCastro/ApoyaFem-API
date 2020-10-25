from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken import views as auth_views

from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    #URL Chat
    url(r'^Sala/$',views.chatListView.as_view()),
    url(r'^Sala/(?P<pk>[1-9][0-9]*)',views.chatDetailView.as_view()),
    url(r'^Sala/ApoyaFem/(?P<pkUAF>[1-9][0-9]*)',views.chatDetailUApoyafemView.as_view()),
    url(r'^Sala/Asesor/(?P<pkUA>[1-9][0-9]*)',views.chatDetailUAsesorView.as_view()),

    #URL Mensaje
    url(r'^Mensaje/$',views.mensageListView.as_view()),
    url(r'^Mensaje/(?P<pk>[1-9][0-9]*)',views.mensajeDetailView.as_view()),
    url(r'^Mensaje/Sala/(?P<pk>[1-9][0-9]*)',views.mensajeListByChat.as_view())
]