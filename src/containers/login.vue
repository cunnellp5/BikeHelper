<template lang="html">
  <div class="is-mobile">
  <div class="field">
    <label class="label">First name</label>
    <p class="control">
      <input class="input" type="text" placeholder="Text input">
    </p>
  </div>
  <br>

  <div class="field">
    <label class="label">Email</label>
    <p class="control has-icon has-icon-right">
      <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
      <span class="icon is-small">
        <i class="fa fa-warning"></i>
      </span>
    </p>
    <p class="help is-danger">This email is invalid</p>
  </div>
  <br>
  <div class="field is-grouped">
    <p class="control">
      <button class="button is-primary">Login</button>
    </p>
    <p class="control">
      <button class="button is-link">Cancel</button>
    </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="css">

</style>
