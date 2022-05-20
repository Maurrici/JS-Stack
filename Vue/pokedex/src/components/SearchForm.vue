<template>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Charizard, Pikachu..." v-model="search">
        <button class="btn btn-outline-secondary" type="button" @click="searchResults">Buscar</button>
    </div>
</template>

<script>

export default{
    props:{
        data: Array
    },
    data(){
        return{
            search: ''
        }
    },
    methods:{
        searchResults: function(){
            let filteredList;
            
            if(this.search != ''){
                filteredList = this.data.filter(item => item.name.includes(this.search.toLowerCase()));
            }else{
                filteredList = this.data;
            }

            this.$emit("filterList", filteredList);
        }
    }
}

</script>