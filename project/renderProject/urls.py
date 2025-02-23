from django.contrib import admin
from django.urls import path
from renderProject import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('login', views.loginuser, name='login'),
    path('register', views.registeruser, name='register'),
    path('', views.index, name='index'),
    path('dashboard', views.Dashboard, name='dashboard'),
    path('graph', views.Graph, name='graph'),
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
