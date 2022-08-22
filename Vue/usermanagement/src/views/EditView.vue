<template>
    <div class="container py-5 d-flex flex-column justify-content-center align-items-center">
        <h2 class="display-4">Edição de usuário</h2>
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
                <label for="role" class="text fw-bold">Função:</label>
                <select class="form-select" name="role" id="role" v-model="role">
                    <option value="0">Administrador</option>
                    <option value="1">Professor</option>
                    <option value="2" selected>Estudante</option>
                </select>
            </div>
            <div class="d-grid gap-2 mt-2">
                <button class="btn btn-primary" type="button" @click="edit">Editar</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    async created(){
        try {
            let req = {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }

            let id = this.$route.params.id;

            let response = await axios.get(`http://localhost:3000/user/${id}`, req);
            let user = response.data;
            this.id = user.id;
            this.email = user.email;
            this.name = user.name;
            this.role = user.role;

        } catch (error) {
            this.$router.push({name: 'users'});
        }
    },
    data(){
        return{
            id: -1,
            name: '',
            email: '',
            role: '',
            error: undefined
        }
    },
    methods: {
        async edit(){
            try {
                let req = {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                }

                await axios.put("http://localhost:3000/user", {
                    id: this.id,
                    email: this.email,
                    name: this.name,
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