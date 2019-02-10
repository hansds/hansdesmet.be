<template>
  <div :class="computedMainClasses">
    <div class="content">
      <nuxt/>
    </div>
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


// .main >>> .header {

// }
.main {
  transition: background-color 200ms ease-in-out;
  margin: 1rem;
  position: absolute;
  top: 0;
  background: $c-gray-lightest;
  padding: 1.5rem;
  // height: calc(100vh - 2rem);


  &--primary {
    background-color: $primary-color;
  }
}

.content {
  // margin-top: 1rem;
}
</style>

