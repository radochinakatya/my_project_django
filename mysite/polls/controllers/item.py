from django.shortcuts import redirect, render
from polls.models import Item

def catalog(request):
    items = Item.objects
    content = {'items': items}
    return render(request, 'catalog.html', content)