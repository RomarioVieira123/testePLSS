from .models import Pessoa
from rest_framework import serializers


# Serializers define the API representation.
class PessoaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pessoa
        fields = ['id', 'nome', 'email', 'cpf']
