<template>
  <div></div>
</template>

<script>

export default {
  transition: 'fade',
  mounted() {
    this.$store.commit('setMainClasses', ['main--primary']);
    this.$store.commit('setHeaderClasses', []);
  },
  head() {
    return {
      title: 'Contact - Hans De Smet',
    }
  },
}
</script>

<style scoped>
</style>

