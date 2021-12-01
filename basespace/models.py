
from django.db import models



class Basespace(models.Model):
    bs_email = models.EmailField(null=False, blank=False)
    bs_pwd = models.CharField(max_length=50, blank=False, null=False)
    bs_access_token = models.CharField(max_length=120, blank=False, null=False)
    bs_user_id = models.CharField(max_length=20, blank=False, null=False)
    bs_credits = models.IntegerField(null=True)
    def __str__(self):
        return "ID: %s, Email: %s" % (self.id, self.bs_email)