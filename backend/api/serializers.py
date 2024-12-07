from django.contrib.auth.models import User
from rest_framework import serializers
from django.db import transaction
from .models import Category, UserSettings, Expense

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "username", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        with transaction.atomic():
            user = User.objects.create_user(**validated_data)

            predefined_categories = [
                {"name": "Food", "description": "Expenses related to food", "is_default": True},
                {"name": "Travel", "description": "Expenses related to travel", "is_default": True},
                {"name": "Utilities", "description": "Expenses related to utilities", "is_default": True},
                {"name": "Entertainment", "description": "Expenses related to entertainment", "is_default": True},
            ]

            for category in predefined_categories:
                Category.objects.create(user=user, **category)

            UserSettings.objects.create(user=user, currency="USD", language="en")

        return user
    
    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username already exists")
        return value
    
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        extra_kwargs = {"user": {"read_only": True}}

class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSettings
        fields = "__all__"
        extra_kwargs = {"user": {"read_only": True}}

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = "__all__"
        extra_kwargs = {"user": {"read_only": True}}

    def create(self, validated_data):
        user = self.context["request"].user
        category = validated_data["category"]
        if category.user != user:
            raise serializers.ValidationError("Category does not exist")
        return Expense.objects.create(user=user, **validated_data)