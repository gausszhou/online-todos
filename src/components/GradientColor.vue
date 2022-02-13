<template>
  <div
    class="gradient-color"
    :class="{ 'gradient-color-active': active }"
    :style="{ backgroundImage: gradientColor }"
  ></div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
    },
    active: {
      type: Boolean,
    },
  },
  computed: {
    gradientColor() {
      return `linear-gradient(to top, 30% ${this.colors[0]},${this.colors[1]})`;
    },
  },
};
</script>

<style lang="scss">
.gradient-color {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  .gradient-color-active {
    opacity: 1;
  }
}
</style>
