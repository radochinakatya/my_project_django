from django.db import models

# Create your models here.

class mailing(models.Model):
    email = models.CharField(max_length=80)