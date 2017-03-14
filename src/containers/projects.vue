<template lang="html">
  <div id="projects">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          BIKE STORE NAME ...
        </div>
        <div class="">
          <table class="table">
            <thead>
              <tr>
                <th>Report</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in projects">
                <td>
                  <div class="card is-fullwidth">
                    <header class="card-header">
                      <p class="card-header-title">
                        Bicyclist Name &amp; Phone Number
                      </p>
                      <a class="card-header-icon">
                        <span class="icon">
                          <i class="fa fa-angle-down"></i>
                        </span>
                      </a>
                    </header>
                    <div class="card-content">
                      <div class="content">
                        <p>Issue: {{item.name}}</p>
                        <p>Message: {{item.priority}}</p>
                        <p>Cash: yes/no</p>
                        <img src="https://source.unsplash.com/random/300x300.png">
                        <br>
                        <a>@Bicycle</a>. <a>#butt</a> <a>#smoothie</a>
                        <br>
                        <small>*Date of submission here*</small>
                      </div>
                    </div>
                    <footer class="card-footer">
                      <!-- <a class="card-footer-item">open</a> -->
                      <a class="card-footer-item button is-danger">Begin rescue!</a>
                      <!-- <a class="card-footer-item">close</a> -->
                    </footer>
                  </div>
                </td>
                <!-- <td>{{item.assignedTo}}</td>
                <td>{{item.name}}</td>
                <td>{{item.priority}}</td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'projects',
  data: function () {
    return {
      projects: []
    }
  },
  methods: {
    loadProjects: function () {
      axios.get('http://www.mocky.io/v2/585e03ce100000b82c501e8e').then((response) => {
        this.projects = response.data
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.loadProjects()
  }
}
</script>

<style lang="css">
  td {
    display: flex;
    justify-content: center;
    /*text-align: center;*/
  }
</style>
