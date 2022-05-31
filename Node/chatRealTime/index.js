import express from "express";
import http from "http";
import { Server } from "socket.io";
import bodyParser from "body-parser";

// Configuração do servidor
var app = express();
var server = http.createServer(app);
var socket = new Server(server); // Definindo socket 

var database = {
    users: [],
    messages: []
};

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas
app.get("/", (req, res) =>{
    res.render("index.ejs");
});

app.get("/chat", (req, res) => {
    let user = {
        name: req.body.name,
        code: req.body.code,
        description: req.body.description
    }

    database.users.push(user);

    res.render("chat.ejs", {name: user.name, code: user.code});
});

socket.on("connection", (socketClient) => { // Evento disparado com conexões com o socket
    socketClient.on("connected", (data) => {
        console.log("Entrou");
        socketClient.emit("connected",database.messages);
    });

    socketClient.on("sendMessage", (data) => {
        database.messages.push(data);

        socket.emit("response", data); // Enviando mensagem para todos os sockets conectados
    });
});

// Definindo a porta
server.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000...");
});
