<template>
  <div :class="styleClasses">
    <v-lazy-image
      srcset="avatar@1x.jpg 400w, avatar@2x.jpg 800w"
      sizes="(max-width: 320px) 280px, 440px"
      src="/avatar@2x.jpg"
      class="avatar__image"
      alt="Hans De Smet"
      @load="onLoad"
      />
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  components: {
    VLazyImage,
  },
  data() {
    return {
      isLoaded: false
    }
  },
  computed: {
    styleClasses() {
      return {
        'avatar': true,
        'avatar--loaded': this.isLoaded,
      }
    },
  },
  methods: {
    onLoad() {
      this.isLoaded = true;
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  display: inline-block;

  &--loaded {
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }

  &__image {
    max-width: 100%;
    height: auto;
  }
}
</style>
