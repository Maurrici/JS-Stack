<template>
  <div id="app" class="row justify-content-start align-items-center">
    <SearchForm :data="pokemons" @filterList="updatePokemons($event)" />
    <div v-for="(pokemon) in filteredPokemons" :key="pokemon.id" class="col-12 col-sm-6 col-md-4 col-lg-2 col- d-flex justify-content-center mb-2">
      <PokemonCard :url="pokemon.url"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PokemonCard from "./components/PokemonCard.vue";
import SearchForm from "./components/SearchForm.vue";

export default {
  name: 'App',
  components:{
    PokemonCard,
    SearchForm,
},

  data(){
    return{
      pokemons: [],
      filteredPokemons: []
    }
  },

  created: async function(){
    try{
      let response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
    
      this.pokemons = response.data.results;
      this.filteredPokemons = response.data.results;
    }catch(err){
      console.log(err);
    }
  },

  methods:{
    updatePokemons: function($event){
      this.filteredPokemons = $event;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 10px 15px;
}
</style>
