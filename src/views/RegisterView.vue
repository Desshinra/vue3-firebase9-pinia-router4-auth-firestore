<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="example@gmail.com" v-model.trim="email">
            <input type="password" placeholder="password" v-model.trim="password">
            <button type="submit">Crear usuario</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user'

const userStore = useUserStore();
const email = ref('desshinra2@gmail.com')
const password = ref('12345678')

const handleSubmit = () => {
    if(!email.value || password.value < 8) {
        return alert ('Llena los campos!!!')
    }
    userStore.registerUser(email.value, password.value)
}


</script>