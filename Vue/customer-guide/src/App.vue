<template>
  <div>
    <h1>Autores da Editora MMS</h1>
    <div class="panel-authors">
        <AuthorInfo :author="author"/>
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
        author:{
          name: "Maurício de Moura",
          age: 20,
          books: 2,
          mainBook: "Que mundão é esse tão cruel?",
          quote: "Não da para vencer todas, mas perder todas é bem simples"
        }
    }
  },
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
