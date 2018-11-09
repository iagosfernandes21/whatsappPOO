import {usuario} from "./usuario";
import {chat} from "./chat";
import {msg} from "./msg";

export class Whatsapp{
    static buscarMensagensNovas(pessoa: any, grupo: any, string: any, usuario : any, chat : any): any {
        throw new Error("Method not implemented.");
    }
private usuario = usuario;
private chat = chat;
private pessoa : string;

public constructor (usuario : usuario [], chat :chat []){
this.usuario = usuario ;
this.chat = chat;
}


public addUsuario(nome:string):boolean{
    if(this.buscarUsuario(nome)!= undefined){
       
        return false;
    }else{
        this.usuario.push(new usuario(nome));
        return true;
    }
}

 public buscarUsuario(nome:string):usuario|undefined{
    for (let i of this.usuario){
        if (i.getNome()==nome){
            return i;
        }
    }
    return undefined;
}

public buscarGrupo(nome:string):chat|undefined{
    for(let i of this.chat){
        if (i.getNome()==nome){
            return i;
        }
    
    
    }
    return undefined;

}
public addGrupo(nome:string):boolean{
    if(this.buscarGrupo(nome)!=undefined){
        return false;
    }else{
        this.chat.push(new chat(nome));
        return true;
    }    
}
public addUserGrupo(adm:string,pessoa:string, grupo:string) : number{
    let a: usuario = this.buscarUsuario(adm);
    let p: usuario = this.buscarUsuario(pessoa);
    let g: chat = this.buscarGrupo(grupo);
    if(a== undefined){
        return 1; //adm nao existe

    }else if(p == undefined){
        return 2; //pessoa nao existe
    }else if(g==undefined){
        return 3; //grupo nao existe
    }else if (g.buscarusuario(pessoa) != undefined){
        return 4; //Pessoa nao existe no grupo
    }else if (g.buscarusuario(adm)==undefined){
        return 5;//admin nao esta no grupo
    }
else{
    g.getUsuario().push(p);
    p.getGrupos().push(g);
    return 0; //com sucesso
}
}

    public enviarMensagem(text : string, pessoa : string ,grupo : string) : number{
    let p:usuario = this.buscarUsuario(pessoa);
    let g:chat = this.buscarGrupo(grupo);
    if (p==undefined){
        return 1;//pessoa n existe
    }else if(g==undefined){
        return 2;//grupo nao existe
    }else if (g.buscarusuario(pessoa)==undefined){
        return 3;//pessoa n esta no grupo
    }else{
        g.getMsg().push(new msg( p, text));
        return 0;//mesangem enviada
    }
} 

    public buscarMensagensNovas (pessoa : string, grupo : string) : msg[] {
        let p: usuario = this.buscarUsuario(pessoa);
        let g: chat = this.buscarGrupo(grupo);
        let res : msg[] = [];
        if(p== undefined){
      console.log("pessoa nao existe");
}   
          else if(g==undefined){
        console.log("grupo nao existe");
}   
    else if (g.buscarusuario(pessoa) == undefined){
        console.log("Pessoa nao esta no grupo");
}   else{
        for (let m of g.getMsg(){
        if (m.buscarLeitor(pessoa) == undefined){
        res.push(m);
        m.getLeitores().push(p);
    }
}

return res;
}
    }
    
