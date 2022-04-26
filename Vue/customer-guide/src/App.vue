<template>
  <div>
    <h1>Editora MMS</h1>
    <h3>Cadastro de Autores</h3>
    <div>
      <input type="text" placeholder="Nome" v-model="newAuthor.name">
      <input type="text" placeholder="Livro Principal" v-model="newAuthor.mainBook">
      <input type="text" placeholder="Frase" v-model="newAuthor.quote">
      <input type="number" placeholder="Idade" v-model="newAuthor.age">
      <input type="number" placeholder="Quantidade de Livros" v-model="newAuthor.books">

      <button @click="createAuthor">Cadastrar</button>
    </div>

    <h3>Autores Cadastrados</h3>
    <div v-for="(author, index) in authors" :key="index" class="panel-authors">
        <AuthorInfo :author="author" :showAge="true"/>
        <input type="text" v-model="author.name">
    </div>
  </div>
</template>

<script>
import AuthorInfo from "./components/AuthorInfo.vue";

export default {
  name: 'App',
  components: {
    AuthorInfo
  },
  data(){
    return{
        newAuthor: {
          name: "",
          age: "",
          books: 0,
          mainBook: '',
          quote: ''
        },
        authors: [
          {
            name: "Maurício de Moura",
            age: 21,
            books: 2,
            mainBook: "Que mundão é esse tão cruel?",
            quote: "Não da para vencer todas, mas perder todas é bem simples"
          },
          {
            name: "Evelyn Moda",
            age: 20,
            books: 2,
            mainBook: "Its going down",
            quote: "Eu sou incriviu, posso não ser mas em minha cabeça eu sou a inciviu Eve."
          }
        ]
    }
  },
  methods: {
    createAuthor: function(){
      this.authors.push(this.newAuthor);
    }
  }
}
</script>

<style>
  .panel-author{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
