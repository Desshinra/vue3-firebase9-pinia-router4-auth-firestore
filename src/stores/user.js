import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: 'desshinra@gmail.com'
    }),
});