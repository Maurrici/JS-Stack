<template>
    <div :class="{'item-panel': true}">
        <div class="name-box">{{author.name}}</div>
        <div class="info-box">
            Livros publicados: <strong>{{author.books}}</strong><br>
            Principal Lançamento: <strong>{{author.mainBook}}</strong> <br>
            <span v-if="showAge">Idade: {{author.age}}</span>
            <span v-else>Idade confidencial</span> <br>
            <p>"{{author.quote}}"</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        author: Object,
        showAge: Boolean
    }
}
</script>

<style scoped>
    .item-panel{
        width: 33%;
        padding: 8px;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: bisque;
    }

    .name-box{
        color: black;
        font-size: 1.2rem;
        font-weight: bolder;
    }

    .info-box p{
        font-style: italic;
    }
</style>