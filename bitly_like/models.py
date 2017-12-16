import random
import string

from django.core.validators import URLValidator
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class BitLink(models.Model):
    link = models.URLField(verbose_name="", validators=[URLValidator], unique=True)
    setattr(link, 'id', "shorten_url")
    bit_link = models.CharField(max_length=10, verbose_name="Bit link", unique=True)
    count_hits = models.IntegerField(default=0, verbose_name="Number of hits")
    date = models.DateTimeField(auto_now_add=True, verbose_name="Creation date")
    user = models.ForeignKey(User, default=0)

    def __str__(self):
        return """bit_link : {} => real link : {} \t hits : {} \t created : {}""".format(self.bit_link, self.link, self.count_hits, self.date)

    def save(self, *args, **kwargs):
        if self.pk is None:
            self.create_reduced_link()
        self.clean()

        super(BitLink, self).save(*args, **kwargs)

    def create_reduced_link(self):
        link_find = False
        while not link_find:
            caracteres = string.ascii_letters + string.digits
            aleatoire = [random.choice(caracteres) for _ in range(5)]
            futur_bit_link = ''.join(aleatoire)
            try:
                print("Test bit link {}".format(futur_bit_link))
                BitLink.objects.get(bit_link=futur_bit_link)
                print("Bit link {} already exist")
            except:
                print("New bit link")
                link_find = True
        self.bit_link = futur_bit_link

    def add_count(self):
        self.count_hits += 1
        self.save()

    class Meta:
        verbose_name = "BitLink"
        verbose_name_plural = "BitLinks"

