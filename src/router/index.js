import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    // 引导页
    {
      path: '/',
      name: 'Index',
      component: () =>
        import('../views/Index.vue'),
      meta: {
        keepAlive: false,
        level: 0,
        tabbar: false
      }
    }
  ]
})