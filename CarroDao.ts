import { DaoInterface } from "./DaoInterface";
import {Carro} from './Carro'
export class CarroDao implements DaoInterface{
    nomeTabela!: string

    inserir(object: Carro): boolean{
        console.log('logica de insert')
        return true
    }
    atualizar(object: Carro): boolean{
        console.log('logica de atualizar')
        return true
    }
    remover(id: number): Carro{
        console.log('logica de remover')
        return new Carro('',0)
    }
    selecionar(id: number): Carro{
        console.log('logica de selecionar')
        return new Carro('',0)
    }
    selecionarTodos(): [any]{
        console.log('logica de Get All')
        return [new Carro('',0)]
    }
}