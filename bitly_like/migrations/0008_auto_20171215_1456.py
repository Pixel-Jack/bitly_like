# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-12-15 14:56
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bitly_like', '0007_auto_20171215_1442'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bitlink',
            name='link',
            field=models.URLField(validators=[django.core.validators.URLValidator], verbose_name='Real link'),
        ),
    ]
