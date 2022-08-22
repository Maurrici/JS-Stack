<template>
    <div class="container py-5 d-flex flex-column justify-content-center align-items-center">
        <h2 class="display-4">Criação de usuário</h2>
        <div class="row justify-content-center mt-3 w-50">
            <div class="col-12 d-flex flex-column align-items-start alert alert-danger" v-if="error != undefined">
                {{ error }}
            </div>
            <div class="col-12 d-flex flex-column align-items-start">
                <label for="name" class="text fw-bold">Nome:</label>
                <input type="text" id="name" class="form-control" v-model="name">
            </div>
            <div class="col-12 d-flex flex-column align-items-start mt-1">
                <label for="email" class="text fw-bold">Email:</label>
                <input type="email" id="email" class="form-control" v-model="email">
            </div>
            <div class="col-12 d-flex flex-column align-items-start mt-1">
                <label for="password" class="text fw-bold">Senha:</label>
                <input type="password" id="password" class="form-control" v-model="password">
            </div>
            <div class="col-12 d-flex flex-column align-items-start mt-1">
                <label for="role" class="text fw-bold">Função:</label>
                <select class="form-select" name="role" id="role" v-model="role">
                    <option value="0">Administrador</option>
                    <option value="1">Professor</option>
                    <option value="2" selected>Estudante</option>
                </select>
            </div>
            <div class="d-grid gap-2 mt-2">
                <button class="btn btn-primary" type="button" @click="register">Cadastrar</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
            name: '',
            password: '',
            email: '',
            role: '',
            error: undefined
        }
    },
    methods: {
        async register(){
            try {
                let req = {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                }

                await axios.post("http://localhost:3000/user", {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    role: this.role
                }, req);
                
                this.$router.push({name: 'users'});
            } catch (error) {
                this.error = error.response.data.message;
            }
        }
    }
}
</script>
<style scoped>

</style>