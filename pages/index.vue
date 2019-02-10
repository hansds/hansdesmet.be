<template>
  <div class="content">
    <avatar/>
    <h1 class="c-typo-heading">
      Hi, I’m Hans De Smet<span class="c-typo--muted">, a freelance IT architect and developer from Belgium.</span>
    </h1>
    <p class="c-typo-subheading">
      I’m a <span class="c-typo--primary">3x certified Salesforce consultant</span>, passionate about technology, business and design.
    </p>
  </div>
</template>

<script>
import Avatar from "~/components/ui/Avatar.vue";

export default {
  components: {
    Avatar
  },
  transition: 'fade',
  mounted() {
    this.$store.commit('setMainClasses', ['main--light']);
    this.$store.commit('setHeaderClasses', []);
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 30vw;
  height: 30vw;

  margin-bottom: 2.5rem;
}

.c-typo-heading {
  margin-bottom: 2.2rem;
}

.c-typo-subheading {
  position: relative;
  margin-bottom: 5em;

  &::after {
    content: ' ';
    position: absolute;
    bottom: -3em;
    left: 0;
    width: 45%;
    height: .2em;
    background-color: $c-primary;
  }
}
</style>

