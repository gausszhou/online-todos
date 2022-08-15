<template>
  <transition name="slide">
    <div class="app-sidebar">
      <div class="app-sidebar-menu">Logout</div>
      <div class="app-sidebar-mask" @click="$emit('close')"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.app-sidebar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 8;
}

.app-sidebar-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  background: rgba(0, 0, 0, 0.2);
}

.app-sidebar-menu {
  position: absolute;
  left:0;
  top: 0;
  width: 160px;
  height: 100vh;
  z-index: 10;
  background-color: #fff;
}

</style>
