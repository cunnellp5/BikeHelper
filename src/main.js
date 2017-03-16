// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import navbar from './components/navbar'
import router from './router'

/* eslint-disable no-new */
new Vue({
  template: `
  <div>
    <navbar />
    <section class="section">
      <div class="container is-mobile">
        <router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  components: {
    navbar
  }
}).$mount('#app')
