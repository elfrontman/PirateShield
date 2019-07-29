from django.shortcuts import render

from backend.models import UserBrand

def index(request):

	user_brand = UserBrand.objects.get(user=request.user)

	print(user_brand)

	context = {
		'brand': user_brand.brand
	}

	request.session['brand_name'] = user_brand.brand.name
	request.session['brand_logo'] = user_brand.brand.logo.url


	return render(request, 'dashboard.html', context)