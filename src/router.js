import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './containers/Home'
import bicyclist from './containers/bicyclist'
import projects from './containers/projects'
import help from './containers/help'
// application routes
const routes = [{
    path: '/',
    component: home
  }, {
    path: '/bicyclist',
    component: bicyclist
  }, {
    path: '/projects',
    component: projects
  }, {
    path: '/help',
    component: help
  }]
  // export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
