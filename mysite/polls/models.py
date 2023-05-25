from django.db import models

class Mailing(models.Model):
    email = models.CharField(max_length=80)

class Signup(models.Model):
    name = models.CharField(max_length=80)
    email_2 = models.CharField(max_length=100)
    phonenumber = models.CharField(max_length=20)
    password = models.CharField(max_length=80)

class Slider(models.Model):
    image = models.TextField()

class Item(models.Model):
    image = models.TextField()
    add_image1 = models.TextField(default='default_value')
    add_image2 = models.TextField(default='default_value')
    add_image3 = models.TextField(default='default_value')
    name = models.TextField(max_length=100)
    description = models.TextField(max_length=500, default='default_description')
    price = models.TextField(max_length=100)
    id_popup = models.TextField(max_length=100, default='default_id_popup')
    id_item = models.TextField(max_length=100, default='default_id_popup')

