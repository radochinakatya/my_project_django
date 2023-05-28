from django.http import HttpResponse
from django.shortcuts import redirect, render
from polls.models import Signup
def create(request):

    signup = Signup()
    signup.text = request.POST.get("name")
    signup.email = request.POST.get("email_2")
    signup.tel = request.POST.get("phonenumber")
    signup.password = request.POST.get("password")
    signup.save()

    return redirect('../index/')
