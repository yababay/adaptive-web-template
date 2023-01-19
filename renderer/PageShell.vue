<template>
  <Header />
    <slot />
  <Footer />
</template>

<script setup>
  import Header from '#root/components/header/index.vue'
  import Footer from '#root/components/footer/index.vue'
</script>
