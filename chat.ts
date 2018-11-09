import {msg} from"./msg";
import {usuario} from "./usuario";
import {Whatsapp} from"./Whatsapp";

export class chat{

  
    private nome : string;
    private usuario : Array <usuario>;
    private msg : Array <msg>;

    public constructor (nome : string, usuario : Array <usuario> = [], msg : Array <msg> = []){
        this.nome = nome;
        this.msg = msg;
        this.usuario = usuario;
    }

    public getNome () : string{
        return this.nome;
    }

    public setNome ( nome : string) : void {
        this.nome = nome;
    }

    public getUsuario () : usuario[] {
    return this.usuario ;
    }

    public setUsuario (usuario : usuario []) : void {
        this.usuario = usuario;
    } 

    public getMsg () : msg [] {
        return this.msg;
    }

    public setMsg(msg : msg []) : void{
        this.msg = msg;
    } 

public buscarusuario(nome:string):usuario|undefined{
   for (let i of this.usuario){
       if (i.getNome()==nome){
           return i;
       }
   }
   return undefined;
}
}