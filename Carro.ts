import { Veiculo } from "./Veiculo";

export  class Carro extends Veiculo{
    private numeroPortas: number
    constructor(modelo: string, numeroPortas: number){
        super()
        this.modelo= modelo
        this.numeroPortas= numeroPortas
    }
    
    public acelerar():void{
        this.velocidade+=10
    }
    public parar():void{
        this.velocidade=0
    }
    public velocidadeAtual(): number{
        return this.velocidade
    }
}