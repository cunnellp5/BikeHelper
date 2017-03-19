<template lang="html">

  <div class="is-fluid">
    <form class="form">
      <div class="field">
        <label class="label">First name</label>
        <p class="control">
          <input class="input" type="text" placeholder="Text input" value="Philthy" required>
        </p>
      </div>
      <br>

      <div class="field">
        <label class="label">Email</label>
        <p class="control has-icon has-icon-right">
          <input class="input" type="email" placeholder="Email input" value="biketest@test.com" required>
          <!-- <span class="icon is-small">
            <i class="fa fa-warning"></i>
          </span> -->
        </p>
        <!-- <p class="help is-danger">This email is invalid</p> -->
      </div>
      <br>

      <div class="field is-grouped">
        <p class="control">
          <button v-on:submit.prevent="login" class="button is-primary" type="submit">Login</button>
        </p>
        <p class="control">
          <button class="button is-link">Cancel</button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
// export default {
//   name: 'login',
//   data: function() {
//     return {
//       login: []
//     }
//   },
//   methods: {
//     logIn: function() {
//       console.log("submitted");
//     }
//   },
//   mounted: function() {
//     this.logIn()
//   }
// }
import axios from 'axios'
export default {
  name: 'login',
  data: function () {
    return {
      login: []
    }
  },
  methods: {
    login: function () {
      axios.post('/login', { firstName: '', email: '' })
      .then((response) => {
        console.log("logged in");
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.login()
  }
}
</script>

<style lang="css">
</style>
