# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-12-15 21:20
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('bitly_like', '0010_auto_20171215_2103'),
    ]

    operations = [
        migrations.AddField(
            model_name='bitlink',
            name='user',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
