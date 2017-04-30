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
      '/test': {
        name: 'test',
        component: require('./pages/Test.vue')
      },
      '/test2': {
        name: 'test2',
        component: require('./pages/Test2.vue')
      }
    })
  }      // close constructor
}     // close class
