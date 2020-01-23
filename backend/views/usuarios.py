from django.shortcuts import render, redirect, get_object_or_404
from django.template import loader
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

from backend.models import User
from backend.forms import UserForm

@login_required
def index(request):
	users = User.objects.all();

	context = {
		'users': users
	}

	print(users)
	return render(request, 'usuarios/list_users.html', context)

def create(request):
	template = loader.get_template('usuarios/create_user.html')

	if request.method == 'POST':
		form = UserForm(request.POST, request.FILES)
	
		if form.is_valid():
			new_user = User.objects.create_user(**form.cleaned_data)

			return redirect('list_usuarios')
	else:
		form = UserForm()
	
	return HttpResponse(template.render({'form': form}, request))


def detail(request, pk):
	template = loader.get_template('usuarios/create_user.html')
	user_detail = get_object_or_404(User, pk=pk)

	if request.method == 'POST':
		form = UserForm(request.POST, request.FILES, instance=user_detail)
	
		if form.is_valid():
			user = form.save(commit=False)
			user.save()

			return redirect('list_usuarios')
	else:
		form = UserForm(instance=user_detail)
	
	return HttpResponse(template.render({'form': form, 'is_edit': 'True'}, request))