<template>
  <div class="home">
    <a-stars />
    <a-navbar />
    <div class="columns center-center">
      <div class="column full">
        <h3 class="text--center">Welcome on Asyncy Login</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
.home {
  background-color: color(dark);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  .center-center {
    align-items: center;
    justify-content: center;
  }
}
</style>
