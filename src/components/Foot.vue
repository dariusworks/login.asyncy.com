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
    </div>
    <div class="column full built"><p class="text--center text--bold">Passionately built with <font-awesome-icon class="text--red" icon="heart" /> in Amsterdam</p></div>
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

  .built {
    @include breakpoint(max s) { color: color(light) }
    color: color(dark)
  }

  .footer.columns {
    @include breakpoint(max s) { flex-direction: row }
    position: relative;
    .column {
      margin-right: 0;
      margin-left: 0;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      @include breakpoint(max s) { padding: 0.25rem .5rem }
      & + .column {
        border-left: 1px solid black;
        @include breakpoint(max s) { border-color: color(light) }
      }
      p {
        margin-top: 0;
      }
      a {
        color: color(dark);
        @include breakpoint(max s) { font-size: fontSize(s); color: color(light) }
      }
    }
  }

  .moon {
    @include breakpoint(max s) { display: none; }
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
