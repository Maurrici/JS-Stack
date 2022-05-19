<template>
    <div class="card" style="width: 18rem;">
        <img :src="pokemon.sprites.front_default" class="card-img-top img-fluid" :alt="pokemon.name">
        <div class="card-body">
            <h5 class="card-title">{{pokemon.id}} {{pokemon.name}}</h5>
            <p class="card-text">
                <span v-for="(type, index) in pokemon.types" :key="index" class="badge bg-secondary ms-1">
                    {{type}}
                </span>
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            pokemon: {
                id: 0,
                name: '',
                sprites: {},
                types: []
            }
        }
    },
    props:{
        num: Number,
        name: String,
        url: String
    },
    computed: {
        nameCapitalize(){
            return this.name[0].toUpperCase() + this.name.slice(1);
        }
    },
    created: async function(){
        try{
            let response = await axios.get(this.url);
            this.pokemon = {...response.data};

            this.pokemon.types = this.pokemon.types.map(item => item.type.name);

            console.log(this.pokemon);
        }catch(err){
            console.log(err);
        }
    }
}
</script>

<style></style>