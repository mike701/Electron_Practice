from django.db import models

class User(models.Model):
    user_name = models.CharField(max_length=200)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    birth_date = models.DateField()
    age = models.IntegerField()
    date_joined = models.DateTimeField('date joined')

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    body = models.CharField(max_length=200)

class TestPosts(models.Model):
    user = models.ForeignKey(User, related_name="testpost", on_delete=models.DO_NOTHING)
    body = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)