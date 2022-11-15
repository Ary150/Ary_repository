import { Server } from "socket.io";

const io = new Server(8080);


io.on("connection", (socket) => {

console.log('un utilisateur c\'est connecté');
    
socket.on('disconnect', () => {
    console.log('déconnexion');
});

let name = 'chat message';

let broadcast = (msg : any) => socket.broadcast.emit(name, msg);

socket.on(name, (msg : any) => {
    console.log('message: ' + msg);
    // // diffusion à d’autres clients après 1,5(1500) seconde
    setTimeout(broadcast, 1500, msg);
  });
});
