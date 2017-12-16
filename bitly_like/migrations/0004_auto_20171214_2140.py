# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-12-14 21:40
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('bitly_like', '0003_delete_bitlink'),
    ]

    operations = [
        migrations.CreateModel(
            name='BitLink',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('link', models.URLField(unique=True, verbose_name='Real link')),
                ('bit_link', models.CharField(max_length=10, unique=True, verbose_name='Bit link')),
                ('count_hits', models.IntegerField(default=0, verbose_name='Number of hits')),
                ('date', models.DateTimeField(auto_now_add=True, verbose_name='Creation date')),
            ],
            options={
                'verbose_name': 'BitLink',
                'verbose_name_plural': 'BitLinks',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(blank=True, max_length=255, unique=True)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='bitlink',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='bitly_like.User'),
        ),
    ]