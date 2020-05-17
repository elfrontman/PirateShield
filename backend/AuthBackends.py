from django.contrib.auth.backends import ModelBackend
from backend.models import Operativo

from pprint import pprint


class TokenOpBackend(ModelBackend):

    def authenticate(self, request, **kwargs):

        pprint(kwargs)

        token = kwargs['token']

        try:
            operativo = Operativo.objects.find(token=token)

            if operativo and operativo.is_active:
                if operativo.is_ready:
                    user = {
                        'username': kwargs['user_name'],
                        'ip': request.client_ip
                    }
                    return user
        except Operativo.DoesNotExist:
            pass
