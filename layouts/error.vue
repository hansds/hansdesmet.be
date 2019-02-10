<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="error">
          <h3 class="c-typography-subtitle c-typography-subtitle--secondary" v-if="error.statusCode === 404">Couldn't find what you were looking for...</h3>
          <h3 class="c-typography-subtitle c-typography-subtitle--secondary" v-else>An error occured.</h3>
            <Button label="Go back home" to="/"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/ui/Button.vue";

export default {
  components: {
    Button,
  },
  props: ['error'],
  transition: 'fade',
  mounted() {
    this.$store.commit('setMainClasses', []);
  },
}
</script>

<style lang="scss" scoped>
.error {
  margin: 20vh 0;
  text-align: center;
}
</style>


