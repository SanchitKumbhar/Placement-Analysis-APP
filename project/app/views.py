import joblib
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Student
from .serializers import *
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
# Create your views here.


# class StudentAPI(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         student = Student.objects.all()
#         serializer = StudentSerializer(student, many=True)

#         return Response({"message": True, "data": serializer.data})

from rest_framework import status


class LoginAPI(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'message': 'Login successful', "user": str(user)}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)


class RegisterAPI(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():

            user = serializer.save()
            print(user)
            token, _ = Token.objects.get_or_create(user=user)
            print(token)
            return Response({"token": str(token)})
        print(serializer.errors)
        return Response({"message": False})


class PredictPlacementAPI(APIView):

    def post(self, request):
        data = request.data
        print(list(data.values()))
        loadModel = joblib.load('model.joblib')
        prediction = loadModel.predict([list(data.values())])
        print(prediction)
        if prediction[0] == 1:
            return JsonResponse({"prediction": "Placed"})
        else:
            return JsonResponse({"prediction": "Not Placed"})
class SalaryPrediction(APIView):
    def post(self,request):
        data = request.data
        print([list(data.values())])
        loadModel = joblib.load("model_salary.joblib")
        prediction=loadModel.predict([list(data.values())])
        print(prediction)
        return JsonResponse({
            "prediction" : int(prediction[0])
        })