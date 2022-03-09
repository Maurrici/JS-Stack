// Games function
function getGames(){
    $("#games").html("");
    axios.get("http://localhost:3000/games", getHeaders()).then(response => {
        let games = response.data;
        games.forEach(game => {
            $("#games").append(`
            <div class="col-4 mb-2 p-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${game.name}</h5>
                        <p class="card-text">Lançado em: <strong>${game.year}</strong>. <br> Preço: <strong>${game.price}</strong>.</p>
                        <button class="btn btn-warning" data-name="${game.name}" data-year="${game.year}" data-price="${game.price}" data-id="${game.id}" data-bs-toggle="modal" data-bs-target="#editModal">Editar</button>
                        <button onClick="deleteGame(event)" class="btn btn-danger" data-name="${game.name}" data-year="${game.year}" data-price="${game.price}" data-id="${game.id}">Deletar</button>
                    </div>
                </div>
            </div>`);
        });
        $("main").removeClass("opacity0");
    }).catch(err => {
        if(err.response.status == 401){
            $("main").addClass("opacity0");
            renderToarst("Faça login para obter acesso as funcionalidades!", "#AC1912");
        }

        if(err.response.status === 500) renderToarst("Não foi possível se conectar a API", "#AC1912");
    });
}

function createGame(){
    let game = {
        name: $("#name").val(),
        year: $("#year").val(),
        price: $("#price").val()
    }

    axios.post("http://localhost:3000/game", game, getHeaders())
        .then(response => {
            console.log(response);
            renderToarst("Game cadastrado com sucesso!", "#2CAC12");
            getGames();
        }).catch(err => {
            if(err.response.status === 500) renderToarst("Não foi possível se conectar a API", "#AC1912");
        });
    
    $("#btn-close").click();
}

function deleteGame(event){
    let game = {
        id: event.target.getAttribute("data-id"),
        name: event.target.getAttribute("data-name"),
        year: event.target.getAttribute("data-year"),
        price: event.target.getAttribute("data-price")
    }
    
    axios.delete(`http://localhost:3000/game/${game.id}`, getHeaders())
        .then(response => {
            renderToarst("Game deletado com sucesso!", "#2CAC12");
            getGames();
        }).catch(err => {
            if(err.response.status === 500) renderToarst("Não foi possível se conectar a API", "#AC1912");
        });
}

function editGame(){
    let game = {
        id: $("#editId").val(),
        name: $("#editName").val(),
        year: $("#editYear").val(),
        price: $("#editPrice").val()
    }

    axios.put(`http://localhost:3000/game/${game.id}`, game, getHeaders())
        .then(response => {
            renderToarst("Game editado com sucesso!", "#2CAC12");
            getGames();
        }).catch(err => {
            if(err.response.status === 500) renderToarst("Não foi possível se conectar a API", "#AC1912");
        });
    
        $("#btn-close2").click();
}

function getHeaders(){
    return {
        headers:{
            Authorization: "Bearer " + sessionStorage.getItem("token")
        }
    }
}

// User function
function createUser(){
    let user = {
        name: $("#userName").val(),
        email: $("#userEmail").val(),
        password: $("#userPassword").val()
    }

    axios.post("http://localhost:3000/user", user).then(response => {
        renderToarst("Usuário cadastrado com sucesso!", "#2CAC12");
    }).catch(err => {
        if(err.response.status === 400) renderToarst(err.response.data.err, "#AC1912");

        if(err.response.status === 500) renderToarst("Não foi possível se conectar a API", "#AC1912");
    });
    $("#btn-close3").click();
}

function login(){
    let user = {
        email: $("#loginEmail").val(),
        password: $("#loginPassword").val()
    }

    axios.post("http://localhost:3000/auth", user)
        .then(response => {
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("name", response.data.name);
            isLogged();
            renderToarst("Login efetuado!", "#2CAC12");
            getGames();
        })
        .catch(err => {
            if(err.response.status === 400) renderToarst(err.response.data.err, "#AC1912");

            if(err.response.status === 500) renderToarst("Não foi possível se conectar a API", "#AC1912");
        })
}

function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    isLogged();
    getGames();
}

function isLogged(){
    if(sessionStorage.getItem("name") != null || sessionStorage.getItem("name") != undefined){
        $("#loginBox").addClass("d-none");
        $("#loggedBox").removeClass("d-none");
        $("#nameLogged").html(sessionStorage.getItem("name"));
    }else{
        $("#loggedBox").addClass("d-none");
        $("#loginBox").removeClass("d-none");
        $("#nameLogged").html("");
    }
}

isLogged();
getGames();