<script setup>
    const props = defineProps({
        author: String,
        year: Number
    })
</script>

<template>
    <footer>&copy;&nbsp;{{ year }}&nbsp;{{ author }}</footer>
</template>
