from django.urls import path

from . import views 

urlpatterns = [
    path('', views.index, name='index'),
    path('users/', views.get_users, name='get_users'),
    path('posts/', views.get_test_posts, name="get_test_posts")
]