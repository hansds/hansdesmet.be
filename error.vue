<template>
  <div class="error">
    <h3
      v-if="error.statusCode === 404"
      class="c-typography-subtitle c-typography-subtitle--secondary"
    >
      Couldn't find what you were looking for...
    </h3>
    <h3 v-else class="c-typography-subtitle c-typography-subtitle--secondary">
      An error occured.
    </h3>
    <NuxtLink class="link" to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup>
const nuxtError = useError()

const error = computed(() => {
  if (!nuxtError.value) {
    return { statusCode: 500, statusMessage: 'An error occurred' }
  }
  return {
    statusCode: nuxtError.value.statusCode || 500,
    statusMessage: nuxtError.value.statusMessage || 'An error occurred'
  }
})

const store = useMainStore()
onMounted(() => {
  store.setMainClasses([])
})
</script>

<style lang="scss" scoped>
.error {
  margin: auto;
  text-align: center;
}

.link {
  display: inline-block;
  font-size: 1.1em;
  text-decoration: none;
  color: $c-gray-light;
  transition: color 300ms $timing-springy;

  &:hover {
    color: $c-primary;
  }
}
</style>
