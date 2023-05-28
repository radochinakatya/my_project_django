from django.http import HttpResponse
from django.shortcuts import redirect, render
from polls.models import Mailing
def create(request):

    mailing = Mailing()
    mailing.email = request.POST.get("email")
    mailing.save()

    return redirect('../index/')
