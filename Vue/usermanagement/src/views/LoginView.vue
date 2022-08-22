<template>
    <div class="container py-5 d-flex flex-column justify-content-center align-items-center">
        <h2 class="display-4">Gerenciamento de Usuários</h2>
        <div class="row justify-content-center mt-3 w-50">
            <div class="col-12 d-flex flex-column align-items-start alert alert-danger" v-if="error != undefined">
                {{ error }}
            </div>
            <div class="col-12 d-flex flex-column align-items-start mt-1">
                <label for="email" class="text fw-bold">Email:</label>
                <input type="email" id="email" class="form-control" v-model="email">
            </div>
            <div class="col-12 d-flex flex-column align-items-start mt-1">
                <label for="password" class="text fw-bold">Senha:</label>
                <input type="password" id="password" class="form-control" v-model="password">
            </div>
            <div class="d-grid gap-2 mt-2">
                <button class="btn btn-primary" type="button" @click="login">Entrar</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data(){
        return{
            password: '',
            email: '',
            error: undefined
        }
    },
    methods: {
        async login(){
            try {
                let response = await axios.post('http://localhost:3000/login', {
                    email: this.email,
                    password: this.password
                });

                localStorage.setItem('token', response.data.token);
                this.$router.push({name: 'home'});
            } catch (error) {
                console.log(error.response.data.message);
                this.error = error.response.data.message;
            }
        }
    }
}
</script>
<style scoped>

</style>