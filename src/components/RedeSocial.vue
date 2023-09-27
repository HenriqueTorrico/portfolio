<template>
  <ul id="container-redes-sociais">
    <li>
      <a href="https://www.linkedin.com/in/henriquetorrico/" target="_blank">
        <RenderImage imagePath="icons/linkedin.svg" imageTitle="Linkedin" imageAlt="Ícone do Linkedin" />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/henrique.torrico/" target="_blank">
        <RenderImage imagePath="icons/facebook.svg" imageTitle="Facebook" imageAlt="Ícone do Facebook" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/henriquetorrico/" target="_blank">
        <RenderImage imagePath="icons/instagram.svg" imageTitle="Instagram" imageAlt="Ícone do Instagram" />
      </a>
    </li>
    <li>
      <a href="https://github.com/HenriqueTorrico" target="_blank">
        <RenderImage imagePath="icons/github.svg" imageTitle="GitHub" imageAlt="Ícone do GitHub" />
      </a>
    </li>
  </ul>
</template>

<script>
import RenderImage from '/@/components/RenderImage.vue'

export default {
  name: 'RedeSocial',
  components: {
    RenderImage
  }
}
</script>

<style lang="scss" scoped>
#container-redes-sociais {
  margin-right: 1rem;

  img {
    width: $ic-wd-small;
  }

  li {
    margin-bottom: .6rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
