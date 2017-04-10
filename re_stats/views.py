from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from re_stats.models import State, ConsumptionByYear
from re_stats.serializers import StateSerializer, ConsumptionByYearSerializer
from rest_framework import viewsets, filters, generics
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

# Create your views here.
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def state_list(request):
    if request.method == 'GET':
        states = State.objects.all()
        serializer = StateSerializer(states, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = StateSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

# @csrf_exempt
# def state_detail(request, pk):
#     try:
#         state = State.objects.get(pk=pk)
#     except State.DoesNotExist:
#         return HttpResponse(status=404)
#
#     if request.method == 'GET':
#         serializer = StateSerializer(state)
#         return JsonResponse(serializer.data)
#
#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = StateSerializer(state, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors, status=400)
#
#     elif request.method == 'DELETE':
#         state.delete()
#         return HttpResponse(status=204)

@csrf_exempt
def consumption_stats_list(request, state_code, year):
    if request.method == 'GET':
        selected_state = State.objects.get(state_code=state_code)
        consumption_stats = selected_state.consumptionbyyear_set.filter(year=year)
        serializer = ConsumptionByYearSerializer(consumption_stats.values(), many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ConsumptionByYearSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
