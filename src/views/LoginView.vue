<script setup>
import { useUserStore } from '../stores/user';

const userStore = useUserStore();
</script>

<template>
    <div>
        <h1>Login</h1>
        <p>{{ userStore.userData }}</p>
    </div>
</template>
