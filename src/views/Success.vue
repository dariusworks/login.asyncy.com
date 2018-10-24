<template>
  <div class="success">
    <a-stars />
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
  height: 100vh;
  .head {
    padding: 3rem 2rem;
    z-index: 50;
    pre {
      &.code {
        display: inline-block;
        background-color: rgba($black, 0.3);
        padding: .5rem .75rem;
        border-radius: .25rem;
      }
    }
    .shadow {
      @include bg-gradient(state(primary));
      box-shadow: 0 4px 5px 0px rgba(0, 0, 0, 0.1);
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px 0px rgba(0, 0, 0, 0.3);
      }
      &:active {
        @include bg-gradient-inverted(state(primary));
      }
    }
  }
}
</style>
