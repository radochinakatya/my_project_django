from django.contrib import admin
from .models import Mailing
from .models import Signup
from .models import Slider
from .models import Item

admin.site.register(Item)
admin.site.register(Slider)
admin.site.register(Mailing)
admin.site.register(Signup)
# Register your models here.
