<template>
    <div class="container py-5 d-flex flex-column justify-content-center align-items-center">
        <h2 class="display-4">Painel de usuários</h2>
        <div class="col-12 d-flex flex-column align-items-start alert alert-danger" v-if="error != undefined">
            {{ error }}
        </div>
        <table class="table table-primary mt-3">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Função</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{roleName(user.role)}}</td>
                    <td>
                        <router-link :to="{name: 'user-edit', params: {id: user.id}}"><button class="btn btn-warning">Editar</button></router-link>
                        <button class="btn btn-danger" @click="showModal(user.name, user.id)">Deletar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <div :class="{'modal': true, 'fade show d-block': isModal}" id="deleteModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-start" id="exampleModalLabel">Deseja deletar o usuário {{ modalUserName }}?</h5>
                    </div>
                    <div class="modal-body">
                        Essa ação não poderá ser desfeita!
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" @click="hideModal">Cancelar</button>
                        <button type="button" class="btn btn-success" @click="deleteUser">Confirmar</button>
                    </div>
                </div>
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

            let response = await axios.get('http://localhost:3000/user', req);
            this.users = response.data;
        } catch (error) {
            console.log(error);
        }
    },
    data(){
        return{
            users: [],
            isModal: false,
            modalUserName: '',
            modalUserId: -1,
            error: undefined
        }
    },
    methods:{
        roleName(roleID){
            let roles = {
                0: "Administrador",
                1: "Professor",
                2: "Estudante" 
            }

            return roles[roleID];
        },
        hideModal(){
            this.isModal = false;
        },
        showModal(name, id){
            this.isModal = true;
            this.modalUserName = name;
            this.modalUserId = id;
        },
        async deleteUser(){
            try {
                let req = {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                }
                await axios.delete(`http://localhost:3000/user/${this.modalUserId}`, req);
                let response = await axios.get('http://localhost:3000/user', req);
                this.users = response.data;
                this.hideModal();
            } catch (error) {
                this.error = error;
                this.hideModal();
            }
        }
    }
}
</script>

<style scoped>

</style>