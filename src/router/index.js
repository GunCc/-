import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

import AuthoEdit from '../views/AuthoEdit.vue'
import AuthoList from '../views/AuthoList.vue'
import AuthoAdd from '../views/AuthoAdd.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { isPublic: true }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/auoth/create', component: AuthoEdit
        },
        {
          path: '/auoth/add/:id', component: AuthoAdd, props: true
        },
        {
          path: '/auoth/list', component: AuthoList
        },
        {
          path: '/auoth/add', component: AuthoAdd
        },
      ]
    }
  ]
})


router.beforeEach((to, form, next) => {
  console.log(to.meta);
  if (!to.meta.isPublic && !localStorage.token) {
    Vue.prototype.$message.error({ type: 'info', message: '请登录' })
    return next('/')
  }
  next()
})

export default router
