from django.contrib import admin

# Register your models here. just to access them from admin
from .models import Note

admin.site.register(Note)