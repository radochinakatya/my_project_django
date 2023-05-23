from django.db import models

# Create your models here.

class Mailing(models.Model):
    email = models.CharField(max_length=80)

class Signup(models.Model):
    name = models.CharField(max_length=80)
    email_2 = models.CharField(max_length=100)
    phonenumber = models.CharField(max_length=20)
    password = models.CharField(max_length=80)

class Slider(models.Model):
    image = models.TextField()
