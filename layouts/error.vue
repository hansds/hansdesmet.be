<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="error">
          <h3 class="c-typography-subtitle c-typography-subtitle--secondary" v-if="error.statusCode === 404">We konden niet vinden waar je naar op zoek bent.</h3>
          <h3 class="c-typography-subtitle c-typography-subtitle--secondary" v-else>Er deed zich een fout voor.</h3>
            <Button label="Terug naar huis" to="/"/>

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
    this.$store.commit('setHeaderClasses', []);
  },
}
</script>

<style lang="scss" scoped>
.error {
  margin: 20vh 0;
  text-align: center;
}
</style>


