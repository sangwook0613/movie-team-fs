# from final_pjt_back.movies.models import Movie
import re
from django.apps import apps
from django.db import models
from django.conf import settings
from movies.models import Movie

# Create your models here.
RANK_CHOICES = (
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
        (6, 6),
        (7, 7),
        (8, 8),
        (9, 9),
        (10, 10),
)
class Review(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='reviews')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    rating = models.IntegerField(choices=RANK_CHOICES)
    likes = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_reviews', blank=True)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.content

class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='comments')
    review = models.ForeignKey(Review, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.content