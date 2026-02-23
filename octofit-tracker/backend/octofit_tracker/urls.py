
from django.contrib import admin
from django.urls import path, include
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'teams': request.build_absolute_uri('api/teams/'),
        'users': request.build_absolute_uri('api/users/'),
        'activities': request.build_absolute_uri('api/activities/'),
        'workouts': request.build_absolute_uri('api/workouts/'),
        'leaderboard': request.build_absolute_uri('api/leaderboard/'),
    })

urlpatterns = [
    path('', api_root, name='api-root'),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('octofit_tracker.api_urls')),
]
