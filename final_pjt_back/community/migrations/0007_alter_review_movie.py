# Generated by Django 3.2.3 on 2021-05-22 14:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0004_auto_20210521_1644'),
        ('community', '0006_alter_review_movie'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='movie',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='movie_reviews', to='movies.movie'),
        ),
    ]
