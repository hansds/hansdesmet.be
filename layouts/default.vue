<template>
  <div :class="computedMainClasses">
    <nuxt/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
  },
  computed: {
    ...mapGetters(['mainClasses']),
    computedMainClasses() {
      return [...['main'], ...this.mainClasses]
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  transition: background-color 200ms ease-in-out;
  display: flex;
  align-items: center;
  margin: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: $c-gray-lightest;
  padding: 1.5rem;

  min-height: calc(100vh - 2rem);

  @include above(md) {
    min-height: calc(100vh - 3rem);
  }

  &--dark {
    background-color: #191B1F;
  }

  @include above(md) {
    margin: 1.5rem;
  }
}
</style>

