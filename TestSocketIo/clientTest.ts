const io = require("socket.io-client");
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin,  output: process.stdout });
const socket = require('socket.io-client')
const repl = require('repl') ;

    ////////////////////////////////////////////////////////
    
    function register(line: any){
        let array_Input = line.split(' ');
        if(array_Input[0] === '--register')
        {
            if(array_Input[1] === '-u' && array_Input[3] === '-p')
            {
                return ({event : 'register', username: array_Input[2], password: array_Input[4]})
            }
        }
        return null;
    }

    function input(){
        rl.question('Donne moi ton nom ? ', (input : any) => {
        
        }

    )};

   rl.question('Donne moi ton nom ? ', (name : any) => {
        const socket = io('http://localhost:8080');  

            //envoi request client 
        const envoiMsg = () => {
            rl.question('> ', (reply : any) => {
                console.log(`envoi ${reply}`);
                socket.emit('chat message', `${name} dit ${reply}`);
                envoiMsg();
            });
        }

       /* rl.on('line', (line:any)=>{
            let dataReceive = register(line);
            socket.emit(dataReceive.event, dataReceive);

        }); */
        
        //evennement de connection 
        socket.on('connect', () => {
            console.log('Connexion reussie !');
            envoiMsg();
        });
        
        //test connect room
        socket.on("joinedroom", (clientid: any) => {
            console.log("client 1 est connecté à la room", clientid);
            socket.emit('Bienjoué c\'est emis');
        
        })
        socket.emit("join")
        // configuration port côté client
        setTimeout(() => {
            socket.emit("memberConnected")
        }, 3000);
        //fin test connect room
        
        socket.on('chat message', (message : any) => {
            console.log(message);
        });
        
        socket.on('disconnect', () => {
            console.log('Connexion perdue !')
        }); 
        
    });    
