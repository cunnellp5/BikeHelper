<template lang="html">
  <div>
    <div class="content">
      <h1 class="content one">Sign up info:</h1>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <p class="control has-icon has-icon-right">
        <input class="input is-danger" type="text" placeholder="Email input" value="">
      </p>
      <p class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <p class="control has-icon has-icon-right">
        <input class="input is-danger" type="text" placeholder="password input" value="">
      </p>
      <p class="help is-danger">This password won't work</p>
    </div>
    <br>

    <div class="content">
      <h1 class="content one">Profile info:</h1>
    </div>

    <div class="field">
      <label class="label">First Name</label>
      <p class="control">
        <input class="input" type="text" placeholder="Bobby">
      </p>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <p class="control">
        <input class="input" type="text" placeholder="Mcflay">
      </p>
    </div>

  <div class="field">
    <label class="label">Image</label>
    <p class="control has-icon has-icon-right">
      <input class="input is-success" type="text" placeholder=".jpg type files go here" value="">
    </p>
  </div>


  <div class="field">
    <label class="label">Phone</label>
    <p class="control has-icon has-icon-right">
      <input class="input is-danger" type="telephone" placeholder="Phone input" value="xxx-xxx-xxxx">
    </p>
    <p class="help is-danger">This phone is invalid</p>
  </div>
<br>
  <div class="field">
    <p class="control">
      <label class="label">Who are you?</label>
      <label class="radio">
        <input type="radio" name="question">
        Bicyclist
      </label>
      <label class="radio">
        <input type="radio" name="question">
        Store
      </label>
    </p>
  </div>
<br>
  <div class="field is-grouped">
    <p class="control">
      <button class="button is-primary">Sign up</button>
    </p>
    <p class="control">
      <button class="button is-link">Cancel</button>
    </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'signup'
}
</script>

<style lang="css">
</style>
