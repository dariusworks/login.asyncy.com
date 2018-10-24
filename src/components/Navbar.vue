<template>
  <a-nav
    :items="[]"
    effect="dark"
    logo="light"
    type="dark"
    transparent
    class="topnav"
    tag="Beta"
    tag-state="yellow"
    @brand-click="$router.push({ name: 'home' })" />
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.topnav {
  padding-top: 1rem;
}
</style>
