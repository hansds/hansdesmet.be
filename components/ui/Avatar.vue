<template>
  <div :class="styleClasses">
    <img
      ref="imgRef"
      src="/avatar@2x.jpg"
      srcset="/avatar@1x.jpg 400w, /avatar@2x.jpg 800w"
      sizes="(max-width: 320px) 280px, 440px"
      class="avatar__image"
      alt="Hans De Smet - entrepreneur and certified Salesforce developer from Aalst, Belgium"
      @load="onLoad"
    />
  </div>
</template>

<script setup>
const imgRef = ref(null)
const isLoaded = ref(false)

function onLoad() {
  isLoaded.value = true
}

onMounted(() => {
  // If the image already loaded before Vue hydrated (SSR), trigger immediately
  if (imgRef.value && imgRef.value.complete) {
    onLoad()
  }
})

const styleClasses = computed(() => ({
  avatar: true,
  'avatar--loaded': isLoaded.value
}))
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  display: inline-block;

  &--loaded {
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);

    .avatar__image {
      animation: fade-in-image .5s;
      opacity: 1;
      animation-timing-function: $timing-springy;
    }
  }

  &__image {
    max-width: 100%;
    height: auto;
    opacity: 0;
  }
}
</style>
