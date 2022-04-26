<template>
  <div id="app">
    <h1>Clientes</h1>
    <h2>Cadastrar Clientes</h2>
    <div>
      <div>
        <input type="text" placeholder="Nome" v-model="newCustomer.name">
      </div>
      <div>
        <input type="number" placeholder="CPF" v-model="newCustomer.cpf">
      </div>
      <div>
        <input type="text" placeholder="Data de Nascimento" v-model="newCustomer.date">
      </div>
      <div>
        <input id="isPrivate" type="checkbox" v-model="newCustomer.private"> <label for="isPrivate">Privado</label>
      </div>
      <button @click="createCustomer">Cadastrar</button>
    </div>
    <h2>Clientes Cadastrados</h2>
    <div v-for="(customer, index) in customers" :key="index">
      <CustomerInfo :customer="customer" @remove="removeCustomer($event)" />
    </div>
  </div>
</template>

<script>
import CustomerInfo from "./components/CustomerInfo.vue";

export default {
  name: 'App',
  components: {
    CustomerInfo
  },
  data(){
    return{
      newCustomer: {
        name: '',
        cpf: 0,
        date: '',
        private: false
      },
      customers: [
        {
          name: 'Maurício de Moura dos Santos',
          cpf: 123456789,
          date: '03/04/2001',
          private: true
        },
        {
          name: 'Evelyn Braga Mendonça',
          cpf: 74895556,
          date: '12/11/2001',
          private: false
        }
      ]
    }
  },
  methods: {
    removeCustomer: function ($event){
      this.customers = this.customers.filter(customer => customer.cpf != $event.cpf);
    },
    createCustomer: function (){
      let customer = {...this.newCustomer};
      this.customers.push(customer);
      this.newCustomer.name = '';
      this.newCustomer.cpf = 0;
      this.newCustomer.date = '';
      this.newCustomer.private = false;
    }
  }
}
</script>

<style>

</style>
