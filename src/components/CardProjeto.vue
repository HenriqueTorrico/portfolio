<template>
  <div class="card-projeto bg-transparent">
    <figure class="card-header">
      <RenderImage :imagePath="banner" imageAlt="Imagem de introdução dos desafios do Iuri"
        title="Imagem de introdução dos desafios do Iuri" />
    </figure>

    <div class="card-body">
      <h3>
        <span class="pointer-title-card"></span>
        {{ nome }}
      </h3>
      <p>
        <!-- Conjunto de desafios propostos pelo <a href="https://iuricode.com" target="_blank">Iuri</a>.
        O objetivo desse desafio é replicar os protótipos criados por ele. As tecnologias e as funcionalidades são
        a critério do desenvolvedor. -->
        {{ descricao }}
      </p>
      <div class="links-card">
        <router-link :to="visualizacao">Visualizar</router-link>
        <a :href="repositorio" target="_blank">Repositório</a>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImage from '/@/components/RenderImage.vue'

export default {
  name: 'CardProjeto',
  components: {
    RenderImage
  },
  props: {
    nome: String,
    descricao: String,
    banner: String,
    repositorio: String,
    visualizacao: String
  }
}
</script>

<style lang="scss" scoped>
.card-projeto {
  .card-header {
    height: 220px;
    border-left: 3px solid $cyan;
    border-radius: 5px;
  }

  .card-body {
    background: $bg-secondary-dark;
    padding: 1rem 1rem 1.6em 1rem;

    h3 {
      font-size: 1rem;
      color: $white;
      margin-bottom: .7rem;
      display: flex;
      align-items: center;

      .pointer-title-card {
        display: block;
        height: .4rem;
        width: .45rem;
        border-radius: 50%;
        background: $cyan;
        margin-right: .55rem;
      }
    }

    p {
      font-size: .8rem;
      color: $gray;
      margin-bottom: 1.7rem;

      a {
        color: $cyan;
        text-decoration: underline;
      }
    }

    .links-card a {
      font-size: .75rem;
      color: $white;
      border: 2px solid;
      border-image: $gradient-purple;
      padding: .6rem 1rem;
      transition: $ts-slow;

      &:first-of-type {
        margin-right: 1rem;
      }

      &:hover {
        color: $cyan;
      }
    }
  }
}
</style>