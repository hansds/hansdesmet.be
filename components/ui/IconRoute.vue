<template>
  <nuxt-link :to="to" class="icon-link">
    <div class="icon-link__icon">
      <slot></slot>
    </div>
    {{ label }}
  </nuxt-link>
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
.icon-link {
  display: inline-block;
  font-size: 1.1em;
  text-decoration: none;
  color: $c-gray-light;
  transition: color 300ms $timing-springy;

  &__icon {
    width: 1.8em;
    display: inline-block;

    /deep/ svg {
      position: relative;
      top: 0.4em;
      width: 1.5em;
      height: 1.5em;
    }
  }

  &:hover {
    color: $c-primary;
  }
}
</style>
