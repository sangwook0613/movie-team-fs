import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'

// Accounts
import Signup from '@/components/accounts/Signup.vue'
import Login from '@/components/accounts/Login.vue'

// Movies
// import  from '@/components/movies/.vue'
import MovieDetail from '@/components/movies/MovieDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetail,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

// 로그인 한 상태 -> Logout
// 로그아웃 한 상태 -> Login, Signup

// router.beforeEach((to, from, next) => {
//   // console.log(to)
//   // console.log(to.name)
//   // console.log(from)
//   // next()
  
//   //1-1. 로그인이 필요한 컴포넌트
//   const authPages = [
//     'TodoList', 
//     'CreateTodo',
//   ]
//   //1-2. 로그아웃이 필요한 컴포넌트(로그인 상태가 아닌 경우에 방문해야 하는 컴포넌트)
//   const publicPages = [
//     'Login', 
//     'Signup',
//   ]

//   //2. 
//   // 가려고 하는 곳(to)이 로그인이 필요한 곳인지 여부를 체크하자 -> true / false 
//   const authRequired = authPages.includes(to.name)
//   // 가려고 하는 곳이 로그인이 필요하지 않은 곳은지 여부를 체크하자 -> true / false 
//   const authNotRequired = publicPages.includes(to.name)
//   // 로그인이 되어있는지 여부를 체크하자 -> true / false
//   const isLoggedIn = localStorage.getItem('jwt') ? true : false


//   //3. 
//   //3-1. 만약 로그인이 필요한 컴포넌트인데 로그인이 안되어 있는 경우에 강제로 가려고 하면?
//   if (authRequired && !isLoggedIn) {
//     // 로그인을 할 수 있도록 (가드) -> Login 컴포넌트로 보내자
//     next({ name: 'Login' })
//   //3-2. 만약 로그인이 필요하지 않은 컴포넌트인데 로그인이 되어있는 상태에서 강제로 가려고 하면?
//   } else if (authNotRequired && isLoggedIn) {
//     next({ name: 'TodoList' })
//   } else {
//     next()
//   }
// })
