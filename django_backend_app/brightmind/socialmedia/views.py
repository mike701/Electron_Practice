
from django.http import JsonResponse, HttpResponse
from django.core import serializers

from .models import User


def index(request):
    user1 = {"name": "Mike", "age": 21}
    user2 = {"name": "Immanuel", "age": 21}
    return JsonResponse({"data": [user1, user2]})

def get_users(request):
    users = User.objects.all()
    user_list = serializers.serialize('json', users)
    return HttpResponse(user_list, content_type="text/json-comment-filtered")