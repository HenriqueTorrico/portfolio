<template>
  <div>
    <GbHeader />
    <main>
      <router-view></router-view>
    </main>
    <GbFooter />
  </div>
</template>

<script>
import '/@/assets/scss/main.scss'
import GbHeader from '/@/components/layout/GbHeader.vue'
import GbFooter from '/@/components/layout/GbFooter.vue'

export default {
  components: {
    GbHeader,
    GbFooter
  }
}
</script>
