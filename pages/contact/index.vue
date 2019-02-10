<template>
  <div></div>
</template>

<script>

export default {
  transition: 'fade',
  mounted() {
    this.$store.commit('setMainClasses', ['main--gray-light']);
    this.$store.commit('setHeaderClasses', []);
  },
  head() {
    return {
      title: 'Contacteer mij',
    }
  },
}
</script>

<style scoped>
</style>

