<template>

<div class="contact">
  <div class="contact-form" >
    <transition name="fade" >
      <div class="columns" v-if="isSent" key="isSent">
        <div class="column col-12" >
          <div class="success">
            <h4 class="c-typography-p">Uw bericht werd verzonden!</h4>
            <animated-check class="animated-check"/>
          </div>
        </div>
      </div>
      <div class="columns" v-if="!isSent" key="isNotSent">
        <div class="column col-6 col-md-12">
          <input type="text" placeholder="Name" name="name" v-model="name" :disabled="isSubmitting" v-validate="'required|alpha_spaces'" :class="inputStyleFunctions('name')">
          <input type="text" placeholder="Phone" name="phone" v-model="phone" :disabled="isSubmitting" :class="inputStyleFunctions('phone')">
          <input type="email" placeholder="E-mail" name="email" v-model="email" :disabled="isSubmitting" v-validate="'required|email'" :class="inputStyleFunctions('email')">
        </div>
        <div class="column col-6 col-md-12">
          <textarea cols="30" rows="3" placeholder="Message" name="message" v-model="message" :disabled="isSubmitting" v-validate="'required'" :class="inputStyleFunctions('message')"></textarea>
          <button class="btn btn-primary" :disabled="!isValidToSubmit" @click="validateAndSubmit">Send</button>
        </div>
      </div>
    </transition>
  </div>

</div>
</template>

<script>
import AnimatedCheck from "~/components/ui/AnimatedCheck.vue";

export default {
  transition: 'fade',
  mounted() {
    this.$store.commit('setMainClasses', ['main--primary-dark']);
  },
  head() {
    return {
      title: 'Contact - Hans De Smet',
    }
  },
  components: {
    AnimatedCheck,
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      message: '',
      isSubmitting: false,
      isSent: false,
    }
  },
  computed: {
    hasAllValues() {
      return this.name.length > 0 && this.email.length > 0 && this.message.length > 0;
    },
    hasErrors() {
      return this.errors.count() > 0;
    },
    isValidToSubmit() {
      return this.hasAllValues && !this.hasErrors && !this.isSubmitting;
    },
  },
  methods: {
    inputStyleFunctions(inputName) {
      return {
        'form-input': true,
        'form-input--invalid': this.errors.has(inputName)
      };
    },
    validateAndSubmit() {
      if (this.isValidToSubmit) {
        this.submit();
      }
    },
    async submit() {
      this.isSubmitting = true;

      try {
        await this.$axios.$post('api/contact', {
          name: this.name,
          email: this.email,
          message: this.message,
          phone: this.phone,
        });

        this.name = '';
        this.phone = '';
        this.email = '';
        this.message = '';
        this.isSubmitting = false;
        this.isSent = true;
      } catch (e) {
        this.isSubmitting = false;
        console.error(e);
      }
    },
  },
}
</script>

<style lang="scss" scoped>

$form-color: #102498;
  .contact {
    display: flex;
    padding: 0 1.5rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    align-items: center;

    @include above(md){
      padding: 0 10vw;
    }
  }

 .contact-form {
    flex: 1;
    @include reveal(1);

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

  .animated-check /deep/ svg{
    width: 10rem;
    height: 10rem;
  }
}

.form-input {
  border-color: $border-color;
  color: $light-color;
  border: 0;
  border-bottom: 2px solid transparentize($color: $light-color, $amount: .9);
  padding: $unit-6 0;
  font-size: .7rem;
  background-color: transparent;

  @include above(xl) {
    font-size: .9rem;
  }

  &:focus {
    border-color: $primary-color;
    box-shadow: 0 2px 24px 0 rgba(49,26,187,0.21);
  }

  &:not(:placeholder-shown):invalid:focus {
    background: initial;
    box-shadow: 0 2px 24px 0 rgba(49,26,187,0.21);
  }

  &::placeholder {
    color: darken($border-color, 15);
  }

  + .form-input {
    margin-top: 1rem;
  }

  &--invalid {
    border-color: $error-color;
  }
}

.btn {
  margin-top: 1rem;
  line-height: 1rem;
  height: auto;
  width: 100%;
  padding: .75rem;

  @include above(xl) {
    padding: 1.15rem;
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


