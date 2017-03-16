<template lang="html">
  <div id="bicyclist">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://source.unsplash.com/random/1280x960.png" alt="Image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image" style="height: 40px; width: 40px;">
              <img src="https://source.unsplash.com/random/96x96.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{bicyclist.firstName}}</p>
            <p class="subtitle is-6">{{bicyclist.email}}</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a>#css</a> <a>#responsive</a>
          <br>
          <small>11:09 PM - 1 Jan 2016</small>
        </div>

        <router-link class="button is-danger is-fullwidth" to="/help">
          <i class="fa fa-list-alt"></i> HELP!
        </router-link>

      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'bicyclist',
  data(){
    return {
      bicyclist: {}
    }
  },
  methods: {
    loadBicyclist: function () {
      axios.get('http://localhost:3000/user').then((response) => {
        this.bicyclist = response.data["0"]
        console.log(response.data);
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.loadBicyclist()
  }
}
</script>


<style lang="css">
  #bicyclist {
    display: flex;
    justify-content: center;
  }
</style>
