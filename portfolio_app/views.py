from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    context = {}
    return render(request, 'portfolio_app/home.html', context)

def home(request):
    context = {}
    return render(request, 'portfolio_app/home.html', context)