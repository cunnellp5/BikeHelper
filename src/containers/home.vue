<template lang="html">
  <div id="home" class="content">
    <router-link class="nav-item is-tab" to="/bicyclist">
      <i class="fa fa-bicyclist"></i> Bicyclist
    </router-link>
    <router-link class="nav-item is-tab" to="/projects">
      <i class="fa fa-list-alt"></i> Bicycle Store
    </router-link>
    <h1>About:</h1>
    <ul>
      <li>Sign in as a bicyclist to get help from bike stores.</li>
        <ul>
          <li>Send out a help notification and some info to recieve help</li>
        </ul>
      <li>Bike stores may sign in to view those in need.</li>
      <ul>
        <li>Bike stores can then rescue you.</li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="css">
  .borderMe {
    margin-bottom: 20px;
  }
</style>
