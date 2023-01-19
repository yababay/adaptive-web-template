<template>
    <header>
      <HeaderBrand :motto="motto" />
      <HeaderLinks />
    </header>
</template>

<script setup>
  import HeaderBrand from './HeaderBrand.vue'
  import HeaderLinks from './HeaderLinks.vue'
  defineProps({motto: String})
</script>
