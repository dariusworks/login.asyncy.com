<template>
  <div class="success">
    <a-stars />
    <div class="comets">
      <a-comet
        animated
        absolute
        variant="green"
        :delay="10"
        style="top: -30%; left: 40%" />
      <a-comet
        animated
        absolute
        variant="red"
        :delay="15"
        style="top: -30%; left: 70%" />
      <a-comet
        animated
        absolute
        variant="blue"
        :delay="20"
        style="top: -30%; right: -20%" />
      <a-comet
        animated
        absolute
        variant="purple"
        style="top: -30%; left: 20%" />
    </div>
    <a-navbar />
    <div class="head text--center">
      <h2>Welcome to Asyncy, {{ name }}!</h2>
      <h4 class="light">You're all set! Check the terminal where you executed <pre class="code">$ asyncy login</pre></h4>
      <a-button class="shadow" state="primary" size="l" @click="redirect">Deploy your first app</a-button>
      <h4 class="light">Time to write your story.</h4>
    </div>
    <a-foot />
  </div>
</template>

<script>
export default {
  name: 'Success',
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    redirect: function () {
      window.location = 'https://docs.asyncy.com/quick-start/#write-your-first-story'
    }
  }
}
</script>

<style lang="scss" scoped>
.success {
  background-color: color(dark);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  overflow: hidden;
  .comets { position: absolute; top: 0; left: 0; right: 0; bottom: 0 }
  .head {
    padding: 3rem 2rem;
    z-index: 50;
    pre {
      &.code {
        display: inline-block;
        background-color: gray(900);
        padding: .5rem .75rem;
        border-radius: .25rem;
      }
    }
    .shadow {
      background-color: state(primary);
      font-weight: bold;
      box-shadow: 0 4px 5px 0px rgba(0, 0, 0, 0.1);
      &:hover {
        box-shadow: 0 6px 8px 0px rgba(0, 0, 0, 0.3);
        background-color: darken(state(primary), 2%);
      }
    }
  }
}
</style>
