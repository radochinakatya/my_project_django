# Generated by Django 4.1.7 on 2023-05-24 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0007_item'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='add_image1',
            field=models.TextField(default='default_value'),
        ),
        migrations.AddField(
            model_name='item',
            name='add_image2',
            field=models.TextField(default='default_value'),
        ),
        migrations.AddField(
            model_name='item',
            name='add_image3',
            field=models.TextField(default='default_value'),
        ),
        migrations.AddField(
            model_name='item',
            name='description',
            field=models.TextField(default='default_description', max_length=300),
        ),
        migrations.AddField(
            model_name='item',
            name='item_id',
            field=models.TextField(default='default_item_id', max_length=100),
        ),
        migrations.AddField(
            model_name='item',
            name='modal_id',
            field=models.TextField(default='default_modal_id', max_length=100),
        ),
    ]
