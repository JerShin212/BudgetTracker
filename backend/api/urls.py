from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryListCreateView.as_view(), name='categories'),
    path('categories/<int:pk>/', views.CategoryDetailView.as_view(), name='category'),
    path('categories/<int:pk>/update/', views.CategoryUpdateView.as_view(), name='update_category'),
    path('categories/<int:pk>/delete/', views.CategoryDeleteView.as_view(), name='delete_category'),
    path('expenses/', views.ExpenseListCreateView.as_view(), name='expenses'),
    path('expenses/<int:pk>/', views.ExpenseDetailView.as_view(), name='expense'),
    path('expenses/<int:pk>/update/', views.ExpenseUpdateView.as_view(), name='update_expense'),
    path('expenses/<int:pk>/delete/', views.ExpenseDeleteView.as_view(), name='delete_expense'),
]