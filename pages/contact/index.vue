<template>
  <div class="contact">
    <Form
      class="contact-form"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit="onSubmit"
    >
      <Transition name="fade">
        <div v-if="isSent" key="isSent" class="columns">
          <div class="column title">
            <NuxtLink class="action action--close" to="/">
              <CloseIcon />
            </NuxtLink>
          </div>
          <div class="column col-12">
            <div class="success">
              <h4 class="c-typography-p">
                Thanks! I'll get back to you as soon as possible.
              </h4>
              <NuxtLink to="/">
                <animated-check class="animated-check" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div v-else key="isNotSent" class="columns">
          <div class="column title">
            <h1 class="c-typo-heading">Get in touch</h1>
            <NuxtLink class="action action--close" to="/">
              <CloseIcon />
            </NuxtLink>
          </div>
          <div class="column col-6 col-md-12 form">
            <input type="hidden" name="form-name" value="contact" />
            <Field
              name="name"
              type="text"
              placeholder="Name"
              :disabled="isSubmitting"
              :class="inputClasses('name')"
            />
            <Field
              name="phone"
              type="text"
              placeholder="Phone"
              :disabled="isSubmitting"
              :class="inputClasses('phone')"
            />
            <Field
              name="email"
              type="email"
              placeholder="E-mail"
              :disabled="isSubmitting"
              :class="inputClasses('email')"
            />
          </div>
          <div class="column col-6 col-md-12 form">
            <Field
              name="message"
              as="textarea"
              cols="30"
              rows="3"
              placeholder="Message"
              :disabled="isSubmitting"
              :class="inputClasses('message')"
            />
            <button class="send" :disabled="!meta.valid || isSubmitting" type="submit">
              Send
            </button>
          </div>
        </div>
      </Transition>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, useForm } from 'vee-validate'
import * as yup from 'yup'
import AnimatedCheck from '~/components/ui/AnimatedCheck.vue'
import CloseIcon from '@/assets/svg/close.svg'

const isSubmitting = ref(false)
const isSent = ref(false)

const validationSchema = yup.object({
  name: yup.string().required(),
  phone: yup.string(),
  email: yup.string().email().required(),
  message: yup.string().required()
})

const { meta, errors, handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    name: '',
    phone: '',
    email: '',
    message: ''
  }
})

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true
  try {
    const body = new URLSearchParams({
      'form-name': 'contact',
      ...values
    }).toString()

    await $fetch('/', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    isSent.value = true
  } catch (e) {
    console.error(e)
  } finally {
    isSubmitting.value = false
  }
})

function inputClasses(fieldName) {
  return {
    'form-input': true,
    'form-input--invalid': !!errors.value[fieldName]
  }
}

useHead({
  title: 'Contact - Hans De Smet'
})

const mainClasses = useMainClasses()
onMounted(() => {
  mainClasses.setMainClasses(['main--dark'])
})

definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  }
})
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  padding: 0 1.5rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;

  @include above(md) {
    padding: 0 10vw;
  }
}

.c-typo-heading {
  color: $c-gray-light;
  font-size: 5em;
  line-height: 1em;
}

.title {
  @include reveal(1);
}

.form {
  @include reveal(2);
}

.action {
  height: 3em;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &--close {
    position: absolute;
    right: 0em;
    top: 1rem;

    svg {
      width: 3em;
      height: 3em;
      fill: $c-gray-light;
    }
  }
}

.contact-form {
  flex: 1;

  @include above(md) {
    min-height: 10rem;
  }

  @include above(xl) {
    min-height: 12rem;
  }
}

.success {
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  align-items: center;

  .animated-check :deep(svg) {
    width: 10rem;
    height: 10rem;
  }

  .c-typography-p {
    color: #ffffff;
  }
}

.form-input {
  border-color: $border-color;
  color: $light-color;
  border: 0;
  border-bottom: 2px solid transparentize($color: $light-color, $amount: 0.9);
  padding: $unit-6 0;
  font-size: 0.7rem;
  background-color: transparent;

  @include above(xl) {
    font-size: 0.9rem;
  }

  &:focus {
    border-color: $primary-color;
    box-shadow: 0 2px 24px 0 rgba(49, 26, 187, 0.21);
  }

  &:not(:placeholder-shown):invalid:focus {
    background: initial;
    box-shadow: 0 2px 24px 0 rgba(49, 26, 187, 0.21);
  }

  &::placeholder {
    color: $c-gray-light;
  }

  + .form-input {
    margin-top: 1rem;
  }

  &--invalid {
    border-color: $error-color;
  }
}

.send {
  margin-top: 1rem;
  line-height: 1rem;
  height: auto;
  background-color: transparent;
  border: none;
  padding: 0.75rem 0;
  color: $light-color;

  &:active,
  &:focus,
  &:hover {
    color: $primary-color;
  }

  &:disabled {
    color: $c-gray-light;
  }
}

textarea.form-input {
  line-height: 1.2rem;

  @include above(xl) {
    line-height: 1.45rem;
  }

  @include below(md) {
    margin-top: 1rem;
  }
}
</style>
