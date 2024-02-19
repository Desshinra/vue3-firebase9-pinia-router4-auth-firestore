import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: 'Desshinra@gmail.com'
    }),
    getters: {
        minus(state) { //getters always return something about, dont modify 
            return state.userData.toLowerCase();
        },
    },
    actions: { //Actions is equivalent to methods
        registerUser(name) {
            this.userData = name
        }
    }
});