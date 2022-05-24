<template>
    <div class="card" style="width: 18rem;">
        <img :src="currentImg" class="card-img-top img-fluid" :alt="pokemon.name">
        <div class="card-body">
            <h5 class="card-title"><strong>#{{pokemon.id}}</strong> {{pokemon.name}}</h5>
            <p class="card-text">
                <span v-for="(type, index) in pokemon.types" :key="index" class="badge ms-1" :style="{backgroundColor: COLORS[pokemon.types[index]]}">
                    {{type}}
                </span>
            </p>
            <div class="row justify-content-around">
                <button class="btn btn-outline-secondary col-5" @click="changeToBack">Back</button>
                <button class="btn btn-outline-secondary col-5" @click="changeToNext">Next</button>
            </div>
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
            },
            COLORS: {
                "normal": "#f6e58d",
                "fighting": "#ffbe76",
                "flying": "#6a89cc",
                "poison": "#7158e2",
                "ground": "#cd6133",
                "rock": "#aaa69d",
                "bug": "#6ab04c",
                "ghost": "#4b4b4b",
                "steel": "#dcdde1",
                "fire": "#e74c3c",
                "water": "#3498db",
                "grass": "#badc58",
                "electric": "#f1c40f",
                "psychic": "#ff7675",
                "ice": "#48dbfb",
                "dark": "#1e272e",
                "fairy": "#ff9ff3",
                "unknown": "#fff",
                "shadown": "#1e272e",
                "dragon": "#54a0ff"
            },
            currentImg: '',
            index: 0
        }
    },
    props:{
        url: String
    },
    computed: {
    },
    created: async function(){
        try{
            // Get data about the pokemon
            let response = await axios.get(this.url);
            this.pokemon = {...response.data};
            this.pokemon.name = this.pokemon.name[0].toUpperCase() + this.pokemon.name.slice(1)
            this.pokemon.types = this.pokemon.types.map(item => item.type.name);
            this.pokemon.sprites = Object.keys(this.pokemon.sprites.other["official-artwork"]).filter(item => item == "front_default" || item == "back_default")
                                    .map(item => this.pokemon.sprites.other["official-artwork"][item]);
            //Start img
            this.currentImg = this.pokemon.sprites[this.index];
        }catch(err){
            console.log(err);
        }
    },
    methods:{
        changeToNext: function (){
            this.index = (this.index + 1 >= this.pokemon.sprites.length) ? 0 : this.index + 1;
            this.currentImg = this.pokemon.sprites[this.index];
        },
        changeToBack: function (){
            this.index = (this.index - 1 < 0) ? this.pokemon.sprites.length - 1 : this.index - 1;
            this.currentImg = this.pokemon.sprites[this.index];
        }
    }
}
</script>

<style>
    .card{
        border-width: 2px;
    }
</style>