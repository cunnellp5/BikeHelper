import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './containers/Home'
import bicyclist from './containers/bicyclist'
import projects from './containers/projects'
import help from './containers/help'
import login from './containers/login'
// application routes
const routes = [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/bicyclist',
    name: 'bicyclist',
    component: bicyclist
  }, {
    path: '/projects',
    name: 'projects',
    component: projects
  }, {
    path: '/help',
    name: 'help',
    component: help
  }, {
    path: '/login',
    name: 'login',
    component: login
  }]
  // export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
