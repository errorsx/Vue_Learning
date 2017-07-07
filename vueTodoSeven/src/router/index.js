import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/index'
import Reading from '@/views/Reading/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/reading',
      name: 'Reading',
      component: Reading
    }
  ]
})
