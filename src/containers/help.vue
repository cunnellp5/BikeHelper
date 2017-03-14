<template lang="html">
  <div id="help">
    <p class="spacer">Please fill form for help, they will see your phone number after submitted...</p>
      <label class="label">Issue</label>
      <p class="control">
        <span class="select">
          <select>
            <option>Select dropdown</option>
            <option>Flat tire</option>
            <option>Broke ass chain</option>
            <option>other</option>
          </select>
        </span>
      </p>
      <label class="label">Message</label>
      <p class="control">
        <textarea class="textarea" placeholder="Custom issues and/or cross streets"></textarea>
      </p>
      <p class="control">
        <label class="radio">
          <input type="radio" name="question">
            I have cash
          </label>
        <label class="radio">
          <input type="radio" name="question">
            I dont have cash
          </label>
      </p>
      <div class="control is-grouped">
        <p class="control">
          <button class="button is-primary">Submit</button>
        </p>
        <p class="control">
          <!-- <button class="button is-link">Cancel</button> -->
          <router-link class="button" to="/bicyclist">
             Cancel
          </router-link>
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'help'
}
</script>

<style lang="css">
  .spacer {
    padding-bottom: 20px;
    color: grey;
  }
</style>
