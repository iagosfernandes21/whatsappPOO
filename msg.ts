    import {usuario} from"./usuario";

    export class msg{

    private  emissor : usuario;
    private  text : string;
    private leitores: Array<usuario>;
    private pessoa : string;

        public constructor(emissor : usuario , text : string ) {
            this.emissor = emissor;
            this.text = text;
            this.leitores = [this.emissor];
        }
        public getEmissor():usuario {
        return this.emissor; 

        }
        
        public setEmissor(emissor:usuario) : void{
            this.emissor = emissor;
        }

        public gettext() : string{
            return this.text;
        }

        public settext(text : string) : void{
            this.text = text;
        }

        public getleitores(): Array<usuario>{
            return this.leitores;
        }

        public setleitores(leitores:Array<usuario>): void{
            this.leitores = leitores;
        } 

        public  buscarLeitor(nome : string ): usuario | undefined{
            for (let i of this.leitores){
                if (i.getNome() == nome){
                    return i;
                }
            }
        }

        


    }