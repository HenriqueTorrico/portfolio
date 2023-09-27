<template>
  <section id="introducao">
    <div class="container">
      <div class="apresentacao">
        <RedeSocial />
        <div>
          <h2>Olá, meu nome é <span>Henrique Torrico</span></h2>
          <p>Sou <span class="enfase">Desenvolvedor Full-Stack</span></p>
          <DownloadCurriculo />
        </div>
      </div>

      <figure id="container-imagem-apresentacao">
        <RenderImage imagePath="introHome.svg" imageTitle="Imagem de introdução" imageAlt="Imagem de introdução" />
      </figure>
    </div>
  </section>

  <section id="sobre"></section>

  <section id="projetos">
    <div class="container">
      <h2 class="title-section">Projetos</h2>
      <div class="container-projetos">
        <CardProjeto v-for="projeto in projetos" :key="projeto.nome" :nome="projeto.nome" :descricao="projeto.descricao"
          :banner="projeto.banner" :repositorio="projeto.repositorio" :visualizacao="projeto.visualizacao" />
      </div>
    </div>
  </section>
</template>

<script>
import '/@/assets/scss/views/home.scss'
import projetos from '/@/db/projetos.json'

import DownloadCurriculo from '/@/components/DownloadCurriculo.vue'
import CardProjeto from '/@/components/CardProjeto.vue'
import RedeSocial from '/@/components/RedeSocial.vue'
import RenderImage from '/@/components/RenderImage.vue'

export default {
  data() {
    return {
      projetos: projetos
    }
  },
  components: {
    DownloadCurriculo,
    CardProjeto,
    RedeSocial,
    RenderImage
  }
}
</script>
