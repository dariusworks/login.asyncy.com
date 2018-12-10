<template>
  <svg
    id="stars"
    ref="stars"
    :class="{ absolute: absolute }"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    xml:space="preserve">
    <StarOne />
    <StarTwo />
    <StarThree />
    <StarFour />
    <g>
      <template v-for="star of stars">
        <template v-for="(s, index) of star.items">
          <use
            :key="`star-${star.model}-${index}`"
            :xlink:href="`#${star.model}`"
            :width="star.width"
            :height="star.height"
            :x="`${s.x}%`"
            :y="`${s.y}%`" />
        </template>
      </template>
    </g>
  </svg>
</template>

<script>
import StarOne from './One'
import StarTwo from './Two'
import StarThree from './Three'
import StarFour from './Four'

export default {
  name: 'Stars',
  components: { StarOne, StarTwo, StarThree, StarFour },
  props: {
    absolute: {
      type: Boolean,
      default: false,
      description: 'Put the svg as absolute'
    }
  },
  // inject: ['client', 'addEvent', 'removeEvent'],
  data: () => ({
    stars: [{
      model: 'star_1',
      width: 10,
      height: 10,
      items: [
        { x: 21, y: 42 },
        { x: 8, y: 25 },
        { x: 67, y: 54, mobile: true },
        { x: 70, y: 23, mobile: true }
      ]
    }, {
      model: 'star_2',
      width: 35,
      height: 35,
      items: [
        { x: 72, y: 57 },
        { x: 85, y: 53, mobile: true },
        { x: 14, y: 54, mobile: true },
        { x: 84, y: 5, mobile: true },
        { x: 52, y: 20 },
        { x: 24, y: 15, mobile: true }
      ]
    }, {
      model: 'star_3',
      width: 30,
      height: 30,
      items: [
        { x: 90, y: 67 },
        { x: 10, y: 90 },
        { x: 32, y: 22, mobile: true },
        { x: 6, y: 12, mobile: true },
        { x: 65, y: 52, mobile: true }
      ]
    }, {
      model: 'star_4',
      width: 10,
      height: 10,
      items: [
        { x: 6, y: 96 },
        { x: 52, y: 22, mobile: true },
        { x: 48, y: 34, mobile: true },
        { x: 12, y: 47, mobile: true },
        { x: 89, y: 49, mobile: true }
      ]
    }]
  })
  // mounted: function () {
  //   this.addEvent('mousemove|resize', this.starsMove)
  // },
  // beforeDestroy: function () {
  //   this.removeEvent('mousemove|resize', this.starsMove)
  // },
  // methods: {
  //   starsMove: function (event) {
  //     this.$nextTick(() => {
  //       let tx = -((this.client.screen.width / 2 - this.client.mouse.x) / 30)
  //       let ty = -((this.client.screen.height / 2 - this.client.mouse.y) / 30)
  //       this.$refs.stars.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
  //     })
  //   }
  // }
}
</script>

<style lang="scss" scoped>
#stars {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  min-width: 100vw;
  &.absolute {
    position: absolute;
  }
}
</style>
