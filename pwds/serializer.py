from rest_framework import serializers
from .models import Password


class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Password
        #fields = ('id', 'title', 'username', 'password', 'url', 'notes', 'created_at', 'updated_at')
        fields = '__all__'