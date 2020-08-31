from django.db import models


# Create your models here.
class Pessoa(models.Model):
    objects = None
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    cpf = models.CharField(max_length=11)

    def __str__(self):
        return self.cpf
