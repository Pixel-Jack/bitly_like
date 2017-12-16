from django.contrib import admin
from .models import BitLink


class BitlinkAdmin(admin.ModelAdmin):
    list_display = ('link', 'bit_link', 'count_hits', 'date', 'user')
    list_filter = ('count_hits', 'user',)
    date_hierarchy = 'date'
    ordering = ('date',)
    search_fields = ('link', 'user', 'count_hits')


# Register your models here.
admin.site.register(BitLink, BitlinkAdmin)

