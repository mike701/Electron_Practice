
from django.views import generic
from django.http import JsonResponse, HttpResponse
from django.core import serializers

from .models import User, TestPosts


class IndexView(generic.ListView):
    template_name = 'socialmedia/index.html'
    def get_queryset(self):
        print("queryset") 

def get_users(request):
    users = User.objects.all()
    user_list = serializers.serialize('json', users)
    return HttpResponse(user_list, content_type="text/json-comment-filtered")

def get_test_posts(request): 
    posts = TestPosts.objects.all()
    posts_list = serializers.serialize('json', posts)
    return HttpResponse(posts_list, content_type="text/json-comment-filtered")