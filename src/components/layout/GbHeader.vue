<template>
  <header class="global-header">
    <nav class="container">
      <router-link to="/">
        <figure class="logo">
          <RenderImage imagePath="logo.svg" imageAlt="Logotipo Torrico Dev" imageTitle="Torrico Dev" />
        </figure>
      </router-link>

      <ul class="container-navegacao">
        <li>
          <router-link to="/#introducao">Ínicio</router-link>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>

      <div></div>
    </nav>
  </header>
</template>

<script>
import RenderImage from '/@/components/RenderImage.vue'

export default {
  name: 'GbHeader',
  components: {
    RenderImage
  }
}
</script>

<style lang="scss" scoped>
.global-header {
  background: $bg-primary-dark;
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 1000;

  nav,
  nav .container-navegacao,
  nav .logo {
    display: flex;
    align-items: center;
  }

  nav {
    justify-content: space-between;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;

    .logo {
      width: 160px;
      justify-content: center;
    }

    .container-navegacao {
      li {
        margin-right: 1.5em;

        &:last-of-type {
          margin-right: 0;
        }

        a {
          font-size: .8em;
          font-weight: 600;
          text-transform: uppercase;
          color: $white;
          transition: $ts-slow;
          padding: .2em .45em .2em .1em;

          &:hover {
            color: $cyan;
          }
        }
      }
    }
  }
}
</style>
