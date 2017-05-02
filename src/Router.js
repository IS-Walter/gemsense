import VueRouter from 'vue-router'
// const subPage = {
//   template: '<router-view></router-view>'
// }

export default class extends VueRouter {
  constructor (arg) {
    super(arg)
    this.map({
      '/': {
        name: 'index',
        component: require('./pages/Index.vue')
      },
      '/products': {
        name: 'products',
        component: require('./pages/Products.vue')
      },
      '/solutions': {
        name: 'solutions',
        component: require('./pages/Solutions.vue')
      },
      '/about': {
        name: 'about',
        component: require('./pages/About.vue')
      },
      '/developer': {
        name: 'developer',
        component: require('./pages/Developer.vue')
      }
    })
  }      // close constructor
}     // close class
