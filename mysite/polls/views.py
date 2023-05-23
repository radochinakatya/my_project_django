from django.http import HttpResponse
from django.shortcuts import render
#from .models import Slider

#def slider(request):
   # slides = Slider.objects.all()
   # return render(request, 'index.html', {'slides': slides})

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

