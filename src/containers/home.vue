<template lang="html">
  <div id="home">
    <router-link class="nav-item is-tab" to="/bicyclist">
      <i class="fa fa-bicyclist"></i> Bicyclist
    </router-link>
    <router-link class="nav-item is-tab" to="/projects">
      <i class="fa fa-list-alt"></i> Bicycle Store
    </router-link>
    <h1 class="is-large">About:</h1>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="css">
</style>
