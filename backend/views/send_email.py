from django.template.loader import get_template
from django.contrib.auth.decorators import login_required
from django.core.mail import EmailMultiAlternatives
from django.conf import settings


def send_email(template, context, emails):

    template_email = get_template(template)
            
    content = template_email.render(context)
    
    email = EmailMultiAlternatives(
        subject = context['subject'],
        body ='Agatha',
        from_email = settings.EMAIL_HOST_USER,
        to = emails,
    )
            
    email.attach_alternative(content, 'text/html')
    email.send()
