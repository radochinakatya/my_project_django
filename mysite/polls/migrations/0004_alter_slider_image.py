# Generated by Django 4.1.7 on 2023-05-23 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0003_slider'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slider',
            name='image',
            field=models.TextField(),
        ),
    ]