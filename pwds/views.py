from rest_framework import  viewsets
from .serializer import PasswordSerializer
from .models import Password

class PasswordView(viewsets.ModelViewSet):
    serializer_class = PasswordSerializer
    queryset = Password.objects.all()