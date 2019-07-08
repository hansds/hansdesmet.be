<template>
  <div class="content">

    <div class="content__aside">
      <avatar/>
    </div>

    <div class="content__main">
      <h1 class="c-typo-heading">
        Hi, I’m Hans De Smet<span class="c-typo--muted">, a freelance IT architect and developer from Belgium.</span>
      </h1>
      <p class="c-typo-subheading">
        I’m a <span class="c-typo--primary">8x certified Salesforce consultant</span>, passionate about technology, business and design.
      </p>
      <div>
        <h3 class="social-title">Get in touch</h3>
        <ul class="social">
          <li class="social__link">
            <icon-link label="Resume on LinkedIn" to="https://www.linkedin.com/in/hans-de-smet">
              <svg>
                <use xlink:href="#linkedin"></use>
              </svg>
            </icon-link>
          </li>
          <li class="social__link">
            <icon-link label="Code on GitHub" to="https://github.com/hansds">
              <svg>
                <use xlink:href="#github"></use>
              </svg>
            </icon-link>
          </li>
          <li class="social__link">
            <icon-route label="Send me a message" to="/contact">
              <svg>
                <use xlink:href="#mail"></use>
              </svg>
            </icon-route>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import Avatar from "~/components/ui/Avatar.vue";
import IconLink from "~/components/ui/IconLink.vue";
import IconRoute from "~/components/ui/IconRoute.vue";
import linkedin from '@/assets/svg/linkedin.svg';
import github from '@/assets/svg/github.svg';
import mail from '@/assets/svg/mail.svg';

export default {
  components: {
    Avatar,
    IconLink,
    IconRoute
  },
  transition: 'fade',
  mounted() {
    this.$store.commit('setMainClasses', ['main--light']);
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 30vw;
  height: 30vw;
  max-width: 10rem;
  max-height: 10rem;

  @include above(3x) {
    max-width: 15rem;
    max-height: 15rem;
  }
}

.c-typo-heading {
  margin-top: 2.5rem;
  margin-bottom: 2.2rem;
  @include reveal(0);
}

.c-typo-subheading {
  position: relative;
  margin-bottom: 5em;
  @include reveal(1);

  &::after {
    content: ' ';
    position: absolute;
    bottom: -3em;
    left: 0;
    width: 45%;
    max-width: 6rem;
    height: .15em;
    background-color: $c-primary;
  }
}

.social-title {
  @include reveal(2);
}

.social {
  list-style: none;
  margin: 0;
  @include reveal(3);

  @include above(xl) {
    display: flex;

    .social__link {
      margin-right: 2em;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

@include above(md) {
  .content {
    flex-direction: row;
    padding: 5vw;

    &__aside {
      flex-basis: 35%;
      display: flex;
      justify-content: flex-end;
    }

    &__main {
      flex-basis: 65%;
      margin-right: 5vw;
    }

    .social {
      font-size: .75em;
    }

    .avatar {
      margin-right: 10vw;
    }

    .c-typo-heading {
      margin-top: 1rem;
    }
  }
}

@include above(lg) {
  .content {
    font-size: 1.5vw;
  }
}
</style>

