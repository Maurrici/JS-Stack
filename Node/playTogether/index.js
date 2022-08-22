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
app.use(express.static("public"));

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
                icon: 1,
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
        icon: req.body.icon,
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
                icon: data.icon,
                id: socketClient.id,
                name: data.name,
                code: data.code,
                description: data.description
            };

            room.players.push(newPlayer);

            socketClient.emit("connected", room);

            room.players.forEach(player => {
                if(player.id != socketClient.id) socket.to(player.id).emit("newPlayer", newPlayer);
            });
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
                        icon: data.icon,
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
        
        // Print
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

        // Print
        rooms.forEach(item => {
            console.log(item);
        });
    });

    socketClient.on('disconnect', function () {
        let roomRemove = undefined;
        rooms.forEach(room => {
            let userDisconnected = room.players.find(player => player.id == socketClient.id);

            if(userDisconnected != undefined) {
                room.players = room.players.filter(item => item.id != userDisconnected.id);

                if(room.players.length > 0){
                    room.players.forEach(player => {
                        socket.to(player.id).emit("removePlayer", room.players);
                    });
                }else roomRemove = room;
            }
        });

        if(roomRemove != undefined) rooms = rooms.filter(item => item.id != roomRemove.id);

        // Print
        console.log(rooms.length);
        rooms.forEach(item => {
            console.log(item);
        });
    });
});

// Definindo a porta
server.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000...");
});
