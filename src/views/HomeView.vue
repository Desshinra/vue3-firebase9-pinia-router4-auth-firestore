<template>
    <div>
        <h1>Home</h1>
        <p>{{ mayusText }}</p>
        <p>{{ userStore.minus }}</p>

    </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
import {computed} from 'vue'
    
const userStore = useUserStore();
const mayusText = computed(() => userStore.userData.toUpperCase())
</script>