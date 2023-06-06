from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from pwds import views

routers = routers.DefaultRouter()
routers.register(r'password', views.PasswordView, 'password')


urlpatterns = [
    path("api/v1/", include(routers.urls)),
    path('docs/', include_docs_urls(title="Password Manager API"))
]