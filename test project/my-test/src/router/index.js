import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history',
}
)


const routes = [
  {
    path: '/',

    redirect: '/login',

  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
    ]

  },

  {
    path: '/chaxun',
    name: 'Chaxun',
    component: () => import('../views/Chaxun.vue')
  },





]

// 挂载路由导航守卫
// router.beforeEach(to, from, next) => {
//   // next直接放行  next('/login')强制跳转
//   if (to.path == '/login') return next()

//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/Login')
// }










/* 由于Vue-router在3.1之后把$router.push()方法改为了Promise。所以假如没有回调函数，错误信息就会交给全局的路由错误处理。
vue-router先报了一个Uncaught(in promise)的错误(因为push没加回调) ，然后再点击路由的时候才会触发NavigationDuplicated的错误(路由出现的错误，全局错误处理打印了出来)。*/
// 禁止全局路由错误处理打印
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
export default router