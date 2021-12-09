from django.contrib import admin

from .models import Basespace,Project,Biosample,AnalysisStatus
admin.site.register(Basespace)

admin.site.register(Project)

admin.site.register(Biosample)


admin.site.register(AnalysisStatus)



#Client ID = 54db1f602f6e4606b7268cd8086cfac1

#Client Secret=da28d0d01f7a4003a9352c4cb8f38391
#Access Token=06b0992449f34d2dad91bf12d0bd5b15
#Redirect_uri=https://uri.to/your/application

#Application Name=kyvorbasespace
#Company or Organization Name=kyvor

#Version Number=1.0.0
#Date Created=Nov 29,2021
#status=Beta