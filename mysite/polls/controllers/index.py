from django.http import HttpResponse


from django.shortcuts import redirect, render

def index(request):
    return render(request, 'index.html', {})

def about(request):
    return render(request, 'about.html', {})

def delivery(request):
    return render(request, 'delivery.html', {})
def signin(request):
    return render(request, 'signin.html', {})


def catalog(request):
    return render(request, 'catalog.html', {})



