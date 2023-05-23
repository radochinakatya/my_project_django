from django.contrib import admin
from .models import Mailing
from .models import Signup
from .models import Slider

admin.site.register(Slider)
admin.site.register(Mailing)
admin.site.register(Signup)
# Register your models here.
