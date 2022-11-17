import { Server } from "socket.io";
var  prompt  =  require('prompt');
var mysql = require('mysql2');
const repl = require('repl')


const io = new Server(8080);


io.on("connection", (socket) => {
  /* init BDD connection */
  var db = mysql.createConnection({
    host : '127.0.0.1',
    user:'root',
    password:'ares',
    database:'Reseau'
  })


//send request à la db dans une room spécifique
socket.on("join", () => {
  //nom de la route
  socket.join("room1")
  console.log("client 1 a join la room");

  socket.on("memberConnected", () => {
    socket.to("room1").emit("joinedroom", socket.id)
  })
  
})

  //gestion erreur 
  db.connect(function(err : any){
    if(err) console.log(err);

  })
  /* init BDD connection */
  
db.query('select * from user', (err: Error, res: any, field: any) => {
  console.log(res);  
});
//console.log(request[1]);

console.log('un utilisateur c\'est connecté');

socket.join("some room");
io.to("some room").emit("some event");

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


  /*socket.on('register', (dataReceive) => {
    console.log(dataReceive.event);
  })*/
});










//
  // Start the prompt
  //
  //prompt.start();

  //
  // Get two properties from the user: name, password
  //
  //prompt.get(schema, function (err : any, result : any) {
    //
    // Log the results.
    //
   /* console.log('Command-line input received:');
    console.log('  name: ' + result.name);
    console.log('  password: ' + result.password);
    console.log('  is_online: ' + result.is_on_line);
*/
 // });






/*import { getUser} from "./getUser";
import { loginUsers} from "./loginUser";
import { authenticateuser} from "./authenticateUser";
import { createUser} from "./createUser";
*/

/*var schema = {
  properties: {
    name: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'Name must be only letters, spaces, or dashes',
      required: true
    },
    password: {
      hidden: true
    },
    is_on_line: {
      message: '0 or 1',
      required: true
    }
  }
};
*/