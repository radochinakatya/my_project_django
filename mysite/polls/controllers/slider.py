from django.shortcuts import redirect, render
from polls.models import Slider

def index(request):
    sliders = Slider.objects
    content = {'sliders': sliders}
    return render(request, 'index.html', content)