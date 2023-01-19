<template>
  <Header />
    <slot />
  <Footer />
</template>

<script setup>
  import Header from '#root/src/components/header/index.vue'
  import Footer from '#root/src/components/footer/index.vue'
</script>