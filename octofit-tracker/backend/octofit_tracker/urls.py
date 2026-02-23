
from django.contrib import admin
from django.urls import path, include
from rest_framework.decorators import api_view
from rest_framework.response import Response

import os

@api_view(['GET'])
def api_root(request, format=None):
    codespace_name = os.environ.get('CODESPACE_NAME')
    if codespace_name:
        base_url = f"https://{codespace_name}-8000.app.github.dev/"
    else:
        base_url = request.build_absolute_uri('/')
    return Response({
        'teams': f"{base_url}api/teams/",
        'users': f"{base_url}api/users/",
        'activities': f"{base_url}api/activities/",
        'workouts': f"{base_url}api/workouts/",
        'leaderboard': f"{base_url}api/leaderboard/",
    })

urlpatterns = [
    path('', api_root, name='api-root'),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('octofit_tracker.api_urls')),
]
