import Vue from 'vue'
import App from './App'
import AppRouter from './Router'

Vue.use(AppRouter)

/* eslint-disable no-new */
const router = new AppRouter({
  // Set to true to remove #! in path.
  // It needs proper configured server.
  // http://readystate4.com/2012/05/17/nginx-and-apache-rewrite-to-support-html5-pushstate/
  history: false
})
const application = Vue.extend({
  components: { App }
})
router.start(application, 'body')
