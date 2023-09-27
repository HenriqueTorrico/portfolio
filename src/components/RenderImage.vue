<template>
  <img :src="`src/assets/images/${imagePath}`" :title="imageTitle" :alt="imageAlt">
</template>

<script>
export default {
  name: 'RenderImage',
  props: {
    imagePath: String,
    imageTitle: String,
    imageAlt: String
  }
}
</script>
