from django.http import HttpResponse
from django.shortcuts import redirect, render

def index(request):
    return render(request, 'index.html', {})

def about(request):
    return render(request, 'about.html', {})

def aboutWork(request):
    return HttpResponse("student")

