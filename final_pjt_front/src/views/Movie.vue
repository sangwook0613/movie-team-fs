<template>
  <div class="mb-5">
    <div>
      <MovieMainPage/>
    </div>
    <div v-if="profile.like_movies.length < 5" class="text-light d-flex flex-column align-items-center my-5 pb-5">
      <div class="fw-bold fs-2">좋아하는 영화를 선택하시면 <span style="color: #00cecb;">추천 영화</span>를 볼 수 있습니다.</div>
      <div class="mt-4">
        <router-link :to="{ name: 'MovieSelect'}">
          <button class="btn rounded-pill white-btn fw-bold fs-5">선택하러 가기</button>
        </router-link>
      </div>
    </div>
    <div v-else>
      <!-- 가장 좋아하는 장르 추천 영화 -->
      <div v-if="mostGenreRecommendMovie.length > 0" class="mt-3">
        <h3 class="fw-bold">가장 좋아하는 장르 영화</h3>
        <VueSlickCarousel :arrows="true" v-bind="settings">
          <div v-for="(movie, idx) in mostGenreRecommendMovie" :key="idx">
            <div class="mx-2 scale">
              <router-link :to="{ name: 'MovieDetail', params: { movieId: movie.id }}">
                <img :src="movie.poster_path" alt="movie-poster" class="card-img-top">
              </router-link>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
      <!-- 장르 추천 영화 -->
      <div v-if="genreRecommendMovie.length > 0" class="mt-3">
        <h3 class="fw-bold">장르 추천 영화</h3>
        <VueSlickCarousel :arrows="true" v-bind="settings">
          <div v-for="(movie, idx) in genreRecommendMovie" :key="idx">
            <div class="mx-2 scale">
              <router-link :to="{ name: 'MovieDetail', params: { movieId: movie.id }}">
                <img loading="lazy" :src="movie.poster_path" alt="movie-poster" class="card-img-top">
              </router-link>
            </div>

          </div>
        </VueSlickCarousel>
      </div>
      <div v-if="keywordRecommendMovie.length > 0" class="mt-3">
        <h3 class="fw-bold">키워드 추천 영화</h3>
        <VueSlickCarousel :arrows="true" v-bind="settings">
          <div v-for="(movie, idx) in keywordRecommendMovie" :key="idx">
            <div class="mx-2 scale">
              <router-link :to="{ name: 'MovieDetail', params: { movieId: movie.id }}">
                <img loading="lazy" :src="movie.poster_path" alt="movie-poster" class="card-img-top">
              </router-link>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    
    <!-- 랜덤 추천 영화 -->
    <div v-if="randomRecommendMovies.length > 0" class="mt-3">
      <h3 class="fw-bold">랜덤 추천 영화</h3>
      <VueSlickCarousel :arrows="true" v-bind="settings">
        <div v-for="(movie, idx) in randomRecommendMovies" :key="idx">
          <div class="mx-2 scale">
            <router-link :to="{ name: 'MovieDetail', params: { movieId: movie.id }}">
              <img :src="movie.poster_path" alt="movie-poster" class="card-img-top">
            </router-link>
          </div>
        </div>
      </VueSlickCarousel>
    </div>

    <div v-if="newRecommendMovie.length > 0" class="mt-3">
      <h3 class="fw-bold">개봉 예정 영화</h3>
      <VueSlickCarousel :arrows="true" v-bind="settings">
        <div v-for="(movie, idx) in newRecommendMovie" :key="idx">
          <div class="mx-2 scale">
            <router-link :to="{ name: 'MovieDetail', params: { movieId: movie.id }}">
              <img loading="lazy" :src="movie.poster_path" alt="movie-poster" class="card-img-top">
            </router-link>
          </div>
        </div>
      </VueSlickCarousel>
    </div>

    <!-- <div v-if="ratingRecommendMovie.length > 0" class="mt-3">
      <h3 class="fw-bold">평점이 높은 영화</h3>
      <VueSlickCarousel :arrows="true" v-bind="settings">
        <div v-for="(movie, idx) in ratingRecommendMovie" :key="idx">
          <div class="mx-2">
            <router-link :to="{ name: 'MovieDetail', params: { movieId: movie.id }}">
              <img loading="lazy" :src="movie.poster_path" alt="movie-poster" class="card-img-top">
            </router-link>
          </div>
        </div>
      </VueSlickCarousel>
    </div> -->

    <div v-if="runtimeRecommendMovie.length > 0" class="mt-3">
      <h3 class="fw-bold">가볍게 시간 떼우기 좋은 영상 추천</h3>
      <VueSlickCarousel :arrows="true" v-bind="settings">
        <div v-for="(movie, idx) in runtimeRecommendMovie" :key="idx">
          <div class="mx-2 scale">
            <router-link :to="{ name: 'MovieDetail', params: { movieId: movie.id }}">
              <img loading="lazy" :src="movie.poster_path" alt="movie-poster" class="card-img-top">
            </router-link>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import MovieMainPage from '@/components/movies/MovieMainPage'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'Movie',
  components: {
    VueSlickCarousel,
    MovieMainPage
  },
  data: function () {
    return {
      backgroundLoading:'#141414',
      settings: {
        "initialSlide": 2,
        "speed": 500,
        "slidesToShow": 6,
        "slidesToScroll": 1,
        "swipeToSlide": true,
      },
    }
  },
  computed: {
    ...mapState('movieStore', [
      'randomRecommendMovies',
      'mostGenreRecommendMovie',
      'genreRecommendMovie',
      'keywordRecommendMovie',
      'newRecommendMovie',
      'ratingRecommendMovie',
      'runtimeRecommendMovie',
    ]),
    ...mapState('accountStore', [
      'profile',
    ]),
    ...mapState([
      'showNav',
    ]),
    ...mapGetters([
      'jwtUsername',
    ]),
  },
  methods: {
    ...mapActions('movieStore', [
      'getRandomRecommendMovie',
      'getMostGenreRecommendMovie',
      'getGenreRecommendMovie',
      'getKeywordRecommendMovie',
      'getNewRecommendMovie',
      'getRatingRecommendMovie',
      'getRuntimeRecommendMovie',
    ]),
    ...mapActions('accountStore', [
      'getProfile',
    ]),
    ...mapActions([
      'updateShowNav',
    ]),
    openLoadingBackground(){
      this.$vs.loading({background:this.backgroundLoading,color:'rgb(255, 255, 255)'})
      setTimeout( ()=> {
        this.$vs.loading.close()
      }, 2100);
    },
  },

  created: function () {
    this.openLoadingBackground()
    this.getProfile(this.jwtUsername)
    this.getRandomRecommendMovie()
    this.getMostGenreRecommendMovie()
    this.getGenreRecommendMovie()
    this.getKeywordRecommendMovie()
    this.getNewRecommendMovie()
    // this.getRatingRecommendMovie()
    this.getRuntimeRecommendMovie()
    this.updateShowNav(true)
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "rgb(20, 20, 20)";
  },
}
</script>

<style scoped>
h3 {
  color: white;
}

.nav-btn{
  height: 47px;
  position: absolute;
  width: 26px;
  cursor: pointer;
  top: 100px !important;
}

.prev-slide:hover{
  background-position: 0px -53px;
}
.next-slide:hover{
  background-position: -24px -53px;
}   

.white-btn {
  border-color: #292828;
  background-color: #FFFFFF;
  width: 180px;
}

.scale {
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.3s ease-in-out;   /* 부드러운 모션을 위해 추가*/
}

.scale:hover {
  transform: scale(1.05);
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
  opacity:0.7;
}
</style>