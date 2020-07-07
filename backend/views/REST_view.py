from backend.models import (
    User, Brand,
    CategoryBrand, Product,
    ImageProduct, DetailImageProduct,
    Operativo, CategoryProduct,
    OperativoConnection,
    Operativo
)

from rest_framework import viewsets, filters
from rest_framework.views import APIView

from backend.serializers import (
    UserSerializer, BrandSerializer,
    CategoryBrandSerializer, ProductSerializer,
    ImageProductSerializer,
    DetailImageProductSerializer,
    DetailMarkerProductSerializer,
    CategoryProductSerializer,
    OperativoSerializer,
    OperativoConnectionSerializer
)

from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.core import serializers

from rest_framework.status import (
    HTTP_200_OK,
    HTTP_401_UNAUTHORIZED
)
from django.http import JsonResponse
from pprint import pprint
from django.utils.crypto import get_random_string
import jwt

class OperativoSerializerViewSet(viewsets.ModelViewSet):
    permission_classes = IsAuthenticated,
    authentication_classes = TokenAuthentication, SessionAuthentication
    filter_backends = (filters.SearchFilter,)
    search_fields = ['operativo__token']

    queryset = OperativoConnection.objects.all()
    serializer_class = OperativoConnectionSerializer

class OperativoViewSet(viewsets.ModelViewSet):
    permission_classes = IsAuthenticated,
    authentication_classes = SessionAuthentication,
    
    filter_backends = (filters.SearchFilter,)
    search_fields = ['id']
    queryset = Operativo.objects.all()
    serializer_class = OperativoSerializer

class UserViewSet(viewsets.ModelViewSet):
    permission_classes = IsAuthenticated,
    authentication_classes = TokenAuthentication,

    queryset = User.objects.all()
    serializer_class = UserSerializer


class BrandViewSet(viewsets.ModelViewSet):
    permission_classes = IsAuthenticated,
    authentication_classes = TokenAuthentication,

    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

    def get_queryset(self):
        token = self.request.query_params.get('token')

        operativo = Operativo.objects.get(token=token)
        brandsList = operativo.brandsList

        if brandsList:
            brands = Brand.objects.filter(id__in=brandsList.split(','))

            return brands

        return None


class CategoryBrandViewSet(viewsets.ModelViewSet):
    permission_classes = IsAuthenticated,
    authentication_classes = TokenAuthentication,

    queryset = CategoryBrand.objects.all()
    serializer_class = CategoryBrandSerializer


class CategoryProductViewSet(viewsets.ModelViewSet):
    permission_classes = IsAuthenticated,
    authentication_classes = TokenAuthentication,

    queryset = CategoryProduct.objects.all()
    serializer_class = CategoryProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = IsAuthenticated,
    authentication_classes = TokenAuthentication,

    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductList(viewsets.ModelViewSet):
    permission_classes = IsAuthenticated,
    authentication_classes = TokenAuthentication,

    list_display = ("brand")
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        token = self.request.query_params.get('token')
        search = self.request.query_params.get('search')

        operativo = Operativo.objects.get(token=token)
        productList = operativo.productList

        if productList:
            brands = Product.objects.filter(
                id__in=productList.split(','), brand__id=search)

            return brands

        return Product.objects.all()


class ImageDetailProduct(viewsets.ModelViewSet):
    permission_classes = IsAuthenticated,
    authentication_classes = TokenAuthentication,

    queryset = ImageProduct.objects.all()
    serializer_class = ImageProductSerializer


class DetailImageProductViewSet(viewsets.ModelViewSet):
    permission_classes = IsAuthenticated,
    authentication_classes = TokenAuthentication,

    filter_backends = (filters.SearchFilter,)
    search_fields = ['image_product__id']
    queryset = DetailImageProduct.objects.all()
    serializer_class = DetailImageProductSerializer


class DetailMarkerProduct(viewsets.ModelViewSet):
    permission_classes = IsAuthenticated,
    authentication_classes = TokenAuthentication,

    filter_backends = (filters.SearchFilter,)
    search_fields = ['id']
    queryset = DetailImageProduct.objects.all()
    serializer_class = DetailMarkerProductSerializer


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login_app(request):
    if request.method == 'POST':

        operativo = get_object_or_404(Operativo,
                                      token=request.data.get('token'))

        if operativo and operativo.is_active:
            if operativo.is_ready:

                username = 'user_token_' + request.data.get('token') + get_random_string(length=4)
                password = get_random_string(length=12)
                user_session = {
                    'username': username,
                    'password': password
                }

                user_session_token = jwt.encode(user_session, "SECRET", algorithm='HS256')

                all_connection = OperativoConnection.objects.filter(
                    operativo__token=request.data.get('token')).count()

                if all_connection < operativo.connections:

                    user_token = User()
                    user_token.username = username
                    user_token.password = password
                    user_token.is_user_token = True

                    user_token.save()

                    connection = OperativoConnection()
                    connection.name_user = request.data.get('user_name')
                    connection.operativo = operativo
                    connection.ip = request.client_ip
                    connection.user = user_token
                    connection.status = True

                    connection.save()

                    token = Token.objects.create(user=user_token)

                    return JsonResponse({
                        'login': 'true',
                        'msg': 'Active Session',
                        'user_name': request.data.get('user_name'),
                        'user': user_session_token.decode('utf-8'),
                        'user_id': user_token.id,
                        'session_id': token.key,
                        'chat_id': connection.id,
                        'ip': request.client_ip}, status=HTTP_200_OK)
                else:
                    return JsonResponse({
                        'error': 'true',
                        'msg': 'Token invalido 3'},
                        status=HTTP_401_UNAUTHORIZED)

            else:
                all_connection = OperativoConnection.objects.filter(
                    operativo__token=request.data.get('token'))

                for conn in all_connection:
                    user = conn.user
                    conn.user.auth_token.delete()
                    conn.delete()
                    user.delete()

                operativo.is_active = False
                operativo.save()

                return JsonResponse({
                    'error': 'true',
                    'msg': 'Token invalido 2'}, status=HTTP_401_UNAUTHORIZED)

        else:
            return JsonResponse({
                'error': 'true',
                'msg': 'Token invalido 1'},
                status=HTTP_401_UNAUTHORIZED)


class Logout(APIView):
    def get(self, request, format=None):

        request.user.auth_token.delete()

        connection = OperativoConnection.objects.get(
            user=request.user)

        connection.is_active = 0
        connection.save()

        request.user.delete()

        return Response(status=HTTP_200_OK)





@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def chat_token(request):
    operativo = get_object_or_404(Operativo, token=request.data.get('token'))

    pprint(operativo.token_chat)

    if not operativo.token_chat:
        operativo.token_chat = request.data.get('token_chat')
        operativo.save()

        return JsonResponse({'created': True}, status=HTTP_200_OK)

    return JsonResponse(
        {'created': False,
         'token': operativo.token_chat}, status=HTTP_200_OK)
