<template>
    <div class="box">
        <hr>
        <h2>Nome: {{ customer.name }}</h2>
        <div>
            <span v-if="!customer.private">CPF: {{ customer.cpf }}</span> <span v-else>CPF: Privado</span> <br>
            Data de Nascimento: {{ customer.date }}
        </div>
        <div>
            <button @click="remove">Deletar</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props: {
        customer: {
            name: String,
            cpf: Number,
            date: String,
            private: Boolean
        }
    },
    methods:{
        remove: function (){
            this.$emit('remove', {cpf: this.customer.cpf});
        }
    },
    filters:{
        nameProcessing: function (value){
            return value.toUpperCase();
        }
    }
}
</script>

<style scoped>
    .box{
        padding: 15px;
        margin: 5px;
        display: block;
        background: rgba(0, 0, 0, 0.353);
        border-radius: 8px;
    }
    h2{
        color: black;
    }
</style>