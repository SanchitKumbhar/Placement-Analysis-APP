from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def loginuser(request):
    return render(request, 'login.html')

def registeruser(request):
    return render(request, 'register.html')

def Dashboard(request):
    return render(request,"dashboard.html")

def Graph(request):
    return render(request,"graph.html")