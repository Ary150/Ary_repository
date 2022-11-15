const io = require("socket.io-client");
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin,  output: process.stdout });

rl.question('Donne moi ton nom ? ', (name : any) => {
    const socket = io('http://localhost:8080');

    const envoiMsg = () => {
        rl.question('> ', (reply : any) => {
            console.log(`envoi ${reply}`);
            socket.emit('chat message', `${name} dit ${reply}`);
            envoiMsg();
        });
    }

    socket.on('connect', () => {
        console.log('Connexion reussie !');
        envoiMsg();
    });

    socket.on('chat message', (message : any) => {
        console.log(message);
    });

    socket.on('disconnect', () => {
        console.log('Connexion perdue !')
    }); 
    
});