<template>
    <a href="/">
        <div class="brand">
            <span class="logo"></span>
            <span class="motto">{{ motto }}</span>
        </div>
    </a>
</template>

<script setup>
    defineProps({motto: String})
</script>