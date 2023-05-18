from django.db import models

# Create your models here.

class Mailing(models.Model):
    email = models.CharField(max_length=80)