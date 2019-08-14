import {ConcessionariaInterface} from './concessionariaInterface'
import {Carro} from './Carro'

export class Concessionaria implements ConcessionariaInterface{
    private endereco : string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco= endereco
        this.listaDeCarros= listaDeCarros
    }
    public fornecerEndereco(): string{
        return this.endereco
    }
    public mostrarListaDecarros(): Array<Carro>{
        return this.listaDeCarros
    }
    public fornecerHorarioFuncionamento(): string{
        return 'Aberto seg a sext das 08:00 as 18h'
    }
}