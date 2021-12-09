from rest_framework.response import Response
from .models import Basespace, Project, Biosample
from .serializers import  ProjectSerializer


def getProjectsList(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    print(serializer.data)
    print(Response(serializer.data))
    return Response(serializer.data)


def getProjectDetail(request, pk):
    projects = Project.objects.get(id=pk)
    serializer = ProjectSerializer(projects, many=False)
    return Response(serializer.data)


def createProject(request):
    data = request.data
    bs_recent_login = Basespace.objects.latest('bs_user_id')
    id = bs_recent_login.bs_user_id
    project = Project.objects.create(

        project_name=data['project_name'],

        bs_user_id=Basespace.objects.get(bs_user_id=id),
        bs_default_project=data['bs_default_project'],

        bs_project_id=data['bs_project_id'],
        project_type=data['project_type'],

    )
    serializer = ProjectSerializer(project, many=False)
 

    return Response(serializer.data)


def updateProject(request, pk):
    data = request.data
    project = Project.objects.get(id=pk)
    serializer = ProjectSerializer(instance=project, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


def deleteProject(request, pk):
    project = Project.objects.get(id=pk)
    project.delete()
    return Response('project was deleted!')