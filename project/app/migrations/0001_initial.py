# Generated by Django 4.2.19 on 2025-02-19 00:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('enrollment_number', models.CharField(max_length=15, unique=True)),
                ('date_of_birth', models.DateField()),
                ('date_joined', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
