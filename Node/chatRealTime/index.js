import express from "express";
import http from "http";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import games from "./database.js";

// Configuração do servidor
var app = express();
var server = http.createServer(app);
var socket = new Server(server); // Definindo socket 

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Variáveis do servidor

var ticketID = 1000;
var rooms = [
    /*{
        id: 1231,
        gameID: 5,
        gameName: "Fall Guys",
        maxPlayers: 4,
        players: [
            {
                name: 'Eren Yeagar',
                code: 1233,
                description: '...' 
            }
        ],
        messages: [
            {
                user: 'Eren Yeagar',
                message: '...'
            }
        ]
    }*/
];

// Rotas
app.get("/", (req, res) =>{
    res.render("index.ejs");
});

app.post("/chat", (req, res) => {
    let user = {
        name: req.body.name,
        code: req.body.code,
        description: req.body.description,
        gameID: req.body.gameID
    }
    res.render("chat.ejs", {user});
});

socket.on("connection", (socketClient) => { // Evento disparado com conexões com o socket
    socketClient.on("connected", (data) => {
        // Verifica a existência de uma sala com vaga para o jogo escolhido
        let room = rooms.find(item => {
            if(item.gameID == data.gameID && item.players.length < item.maxPlayers) return true;
        });

        if(room != undefined){
            // Adiciona cliente na sala
            let newPlayer = {
                id: socketClient.id,
                name: data.name,
                code: data.code,
                description: data.description
            };

            room.players.push(newPlayer);

            socketClient.emit("connected", room);
            socketClient.broadcast.emit("newPlayer", newPlayer);
        }else{
            // Cria uma nova sala
            let game = games.find(item => item.id == data.gameID);
            let newRoom = {
                id: ticketID,
                gameID: game.id,
                gameName: game.name,
                maxPlayers: game.maxPlayers,
                players: [
                    {
                        id: socketClient.id,
                        name: data.name,
                        code: data.code,
                        description: data.description
                    }
                ],
                messages: []
            };
            rooms.push(newRoom);
            ticketID += 1;

            socketClient.emit("connected", newRoom);
        }
        
        rooms.forEach(item => {
            console.log(item);
        });
    });

    socketClient.on("sendMessage", (data) => {
        let room = rooms.find(item => item.id == data.id);
        let newMessage = {
            user: data.user, 
            message: data.message
        }

        room.messages.push(newMessage);

        // Enviando mensagem para os sockets da sala
        room.players.forEach(player => {
            socket.to(player.id).emit("message", newMessage);
        });

        rooms.forEach(item => {
            console.log(item);
        });
    });
});

// Definindo a porta
server.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000...");
});
