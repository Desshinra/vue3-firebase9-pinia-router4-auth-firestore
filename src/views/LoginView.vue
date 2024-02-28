<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="example@gmail.com" v-model.trim="email">
            <input type="password" placeholder="password" v-model.trim="password">
            <button type="submit" :disabled="userStore.loadingUser">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user'
// import {useRouter}  from 'vue-router'

const userStore = useUserStore();
// const router = useRouter()

const email = ref('desshinra2@gmail.com')
const password = ref('12345678')

const handleSubmit = async() => {
    if(!email.value || password.value.length < 6) {
        return alert ('Llena los campos!!!')
    }
    await userStore.loginUser(email.value, password.value)
    // router.push('/')
}

</script>