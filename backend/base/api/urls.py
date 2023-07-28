from django.urls import path
from . import views
from rest_framework_simplejwt.views import (TokenRefreshView,)
from . views import  MyTokenObtainPairView, RegisterView, classUserList,userDetails

urlpatterns = [
    path('',views.getRoutes),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('register', RegisterView.as_view()),
    path('api/user-list/', views.userList, name='user-list'),
    path('api/user-update-form/<int:pk>/', views.userUpdate, name='user-update-form'),
    path('api/user-delete/<int:pk>/', views.userDelete, name='user-delete'),

    path('api/class-userlist/', classUserList.as_view(), name='class-userlist'),
    
    path('api/class-userlist/<int:pk>/', userDetails.as_view(), name='userDetails'),


]
