import express from "express";
import http from "http";
import { Server } from "socket.io";

// Configurando Servidor
var app = express();
var server = http.createServer(app);
var socket = new Server(server); // Vinculando socket ao servidor

app.set("view engine", "ejs");

// Rotas do servidor
app.get("/", (req, res) => {
    res.render("index.ejs");
});

socket.on("connection", (socketClient) => {
    socketClient.on("user", (data) => {
        console.log(data);

        socketClient.emit("user_response", { response: "Você está conectado!"});
    });
});

// Execução e definição da porta
server.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000...");
});

