<template>
  <div class="foot">
    <a-planet
      absolute
      class="moon"
      variant="cyan" />
    <div class="footer columns center">
      <div class="column"><a-link href="#">About</a-link></div>
      <div class="column"><a-link href="#">Contact</a-link></div>
      <div class="column"><a-link href="#">Help</a-link></div>
      <div class="column"><a-link href="#">Privacy</a-link></div>
      <div class="column"><a-link href="#">Terms</a-link></div>
      <div class="column full"><p class="text--center text--dark text--bold">Passionately built with <font-awesome-icon class="text--red" icon="heart" /> in Amsterdam</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.foot {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;

  .footer.columns {
    position: relative;
    .column {
      margin-right: 0;
      margin-left: 0;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      & + .column:not(.full) {
        border-left: 1px solid black;
      }
      p {
        margin-top: 0;
      }
    }
  }

  .moon {
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    background-size: 250% 250%;
    background-position: 50% 0%;
    max-width: 100%;
    width: 1200px;
    height: 250px;
  }
}
</style>
