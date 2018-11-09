import { msg } from "./msg";

export class usuario{
    private grupo:Array<Grupo>
    private msg: Array<Grupo>

    public Constructor(grupo:Array<Grupo>,  msg:Array<Grupo>){
        this.grupo=grupo;
        this.msg=msg;
    }
    public getGrupo():Array<string>{
        return this.grupo;
    }
    public setGrupo(grupo:Array<string>): void{
        this.grupo=grupo;
}
}