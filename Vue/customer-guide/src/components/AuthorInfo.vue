<template>
    <div class="item-panel">
        <div class="name-box">{{author.name}}</div>
        <div class="info-box">
            Livros publicados: <strong>{{author.books}}</strong><br>
            Principal Lançamento: <strong>{{author.mainBook}}</strong> <br>
            Idade: {{author.age}} <br>
            <p>"{{author.quote}}"</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        author: Object
    }
}
</script>

<style scoped>
    .item-panel{
        width: 33%;
        padding: 8px;
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