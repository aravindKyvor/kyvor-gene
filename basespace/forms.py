from django import forms


class ApplicationForm(forms.Form):
    Id = forms.CharField(label='Your Application Id', max_length=100)
     