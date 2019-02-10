<template>
  <div class="avatar">
    <v-lazy-image
      srcset="avatar@1x.jpg 400w, avatar@2x.jpg 800w"
      sizes="(max-width: 320px) 280px, 440px"
      src="/avatar@2x.jpg"
      class="avatar__image"/>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
components: {
  VLazyImage,
},
}
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;

  &__image {
    max-width: 100%;
    height: auto;
  }
}
</style>
