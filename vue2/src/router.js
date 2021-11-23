import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/vue2',
      name: 'vue2',
      component: () => import('@/vue2.vue'),
    },
  ],
})
export default router
