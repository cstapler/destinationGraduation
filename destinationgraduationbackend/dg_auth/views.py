from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

def login_start(request):
    return render(request, 'login_start.html', {})

def login_post(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
        return render(request, 'login_success.html', {})
    else:
        # Return an 'invalid login' error message.
        return render(request, 'login_error.html', {})
