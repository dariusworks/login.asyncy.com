<template>
  <div class="foot">
    <div class="scene">
      <a-planet
        class="moon"
        variant="moon" />
      <div class="surface">
        <div class="rockets" :class="[{launch: launched}]">
          <div class="rocket-container">
            <a-rocket @click.native="launched = true" />
          </div>
          <div class="reverse">
            <div class="jetwrapper jetanim">
              <div class="jet" />
            </div>
          </div>
        </div>
        <a-astronaut />
      </div>
    </div>
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
  name: 'Footer',
  data: () => ({
    launched: undefined
  })
}
</script>

<style lang="scss" scoped>
.foot {
  position: relative;
  min-height: 30rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;

  .built {
    @include breakpoint(max s) { color: color(light) }
    color: color(dark);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .footer.columns {
    @include breakpoint(max s) { flex-direction: row }
    position: absolute;
    bottom: 2rem;
    .column {
      margin-right: 0;
      margin-left: 0;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      @include breakpoint(max s) { padding: 0.25rem .5rem }
      & + .column {
        &:before {
          content: '·';
          display: block;
          position: absolute;
          left: -2px;
          top: 0;
          font-weight: bold;
          font-size: 1.3rem;
          color: color(dark);
        }
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

  .scene {
    // @include breakpoint(max s) { display: none; }
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    max-width: 100%;
    width: 1200px;
    height: 400px;

    .moon {
      @include breakpoint(max s) { background-size: 200% 100% }
      background-size: 100%;
      background-position: 50% 0;
      position: absolute;
      max-width: 100%;
      top: 8rem;
      width: 1200px;
      height: 600px;
    }
    .surface {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      bottom: 10rem;

      .rockets {
        top: 240px;
        animation: rocketLaunch 2.5s linear;
        animation-play-state: paused;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        cursor: help;
        &.launch {
          cursor: not-allowed;
          animation-play-state: running;
          .reverse { visibility: visible; }
          .rocket-container::before { animation: rocketLaunchShadow 2.5s linear; animation-play-state: running; animation-iteration-count: 1; animation-fill-mode: forwards; }
        }
        .reverse {
          z-index: 2;
          visibility: hidden;
          top: -40px;
          transform: rotate(180deg)
        }
      }
    }
    .rocket-container {
      &::before {
        content: '';
        z-index: 1;
        display: block;
        position: absolute;
        bottom: -5px;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 60%;
        height: 30px;
        background-color: rgba(gray(600), 0.25);
        border-radius: 100%;
      }
    }
    .rocket {
      z-index: 3;
      position: relative;
      display: inline-block;
    }
    .astronaut {
      position: relative;
      display: inline-block;
    }
  }
}

@keyframes rocketLaunch {
  1% { transform: translate3d(0, 0, 0) }
  3% { transform: translate3d(10px, 0, 0 ) }
  6% { transform: translate3d(0px, 3px, 0 ) }
  9% { transform: translate3d(-10px, -2px, 0 ) }
  14% { transform: translate3d(6px, -5px, 1px ) }
  28% { transform: translate3d(-6px, -45px, 3px ) }
  41% { transform: translate3d(0px, -80px, 8px ) }
  75% { transform: translate3d(0px, -50vh, 10px ) }
  100% { transform: translate3d(0px, -1500px, 0px ) }
}
@keyframes rocketLaunchShadow {
  1% { opacity: 1; transform: translate3d(10px, 0, 0 ) }
  3% { opacity: 1; transform: translate3d(10px, 0, 0 ) }
  6% { opacity: 0.99; transform: translate3d(0, -3px, 0 ) }
  9% { opacity: 0.99; transform: translate3d(-10px, 2px, 0 ) }
  14% { opacity: 0.92; transform: translate3d(6px, 5px, 0 ) }
  28% { opacity: 0.7; transform: translate3d(-6px, 45px, 3px ) }
  41% { opacity: 0.3; transform: translate3d(0, 80px, 20px ) }
  75% { opacity: 0.0; transform: translate3d(0, 50vh, 20px ) }
  100% { opacity: 0.0; transform: translate3d(0, 1500px, 20px ) }
}
</style>
