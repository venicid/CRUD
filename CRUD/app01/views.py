from django.shortcuts import render

# Create your views here.


from rest_framework.views import APIView
from rest_framework.response import Response

data = [
        {"markdown": "##vue初认识", "title": "day1 vue学习", "content": "vue初认识"},
        {"markdown": "#vue全家桶", "title": "day2 vue进阶", "content": "vue全家桶"},
        ]


class CommentViewSet(APIView):
    """笔记"""
    def get(self,request):

        return Response(data)

    def post(self,request):
        print(request.data)
        data.append(request.data)
        print(data)
        return Response(data)