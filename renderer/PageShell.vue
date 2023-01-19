<template>
  <Header :motto="motto" />
    <slot />
  <Footer :year="year" :author="author" />
</template>

<script setup>

  import settings from '#root/settings.json'
  import Header from '#root/components/header/index.vue'
  import Footer from '#root/components/footer/index.vue'

  const {author, motto, year} = settings
</script>
