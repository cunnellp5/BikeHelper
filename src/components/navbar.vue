<template lang="html">
  <nav id="hideMe"class="nav has-shadow" >
    <div class="nav-left">
      <router-link class="nav-item is-brand" to="/">
        Home Page
      </router-link>

    </div>
    <div class="nav-right">
      <span class="nav-item">
        <a class="button">Logout</a>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="css">
</style>
