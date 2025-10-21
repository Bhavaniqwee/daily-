from django.shortcuts import render
from django.http import HttpResponse

# Create your views
def insertemployee(request):
    return render(request,'DBApp/insert.html')


