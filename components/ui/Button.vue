<template>
  <nuxt-link :to="to" class="button">{{ label }}</nuxt-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  font-weight: 700;
  z-index: 0;
  display: inline-block;
  padding: 1em 0;
  margin: 1em 1em;
  font-size: 0.9em;

  &:before {
    content: '';
    position: absolute;
    background-color: $primary-color-lightest;
    width: 4em;
    height: 4em;
    border-radius: 4em;
    left: -1.25em;
    top: -0.3em;
    z-index: -1;
    transition: width 200ms;
    transition-timing-function: $timing-springy;
  }

  &:hover {
    text-decoration: none;

    &:before {
      width: calc(100% + 2.5em);
    }
  }
}
</style>
