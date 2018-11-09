import {usuario} from "./usuario";
import { chat } from "./chat";
import { msg } from "./msg";
import {Whatsapp} from "./Whatsapp"

declare function require(msg: string) : any;
var readline = require('readline-sync');


let menu: boolean = true;
console.log ("Comandos= funcao");
while (menu){
    let opcao: string= readline.question("Informe opcao: ");
    switch (menu){
    
        case "/User":
        let novouser : string = readline.question("Digite o nome do usuario");
        console.log((Whatsapp.addUserGrupo));
    }

}