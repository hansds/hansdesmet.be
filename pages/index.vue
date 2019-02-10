<template>
  <div class="content">
    <Intro/>
  </div>
</template>

<script>
import Intro from '~/components/partials/Intro.vue'

export default {
  components: {
    Intro,
  },
  transition: 'fade',
  mounted() {
    this.$store.commit('setMainClasses', ['main--light']);
    this.$store.commit('setHeaderClasses', []);
  },
}
</script>

<style lang="scss" scoped>
</style>

