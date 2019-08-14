import { DaoInterface } from "./DaoInterface";
import {Concessionaria} from './Concessionaria'
export class concessionariaDao implements DaoInterface{
    nomeTabela!: string

    inserir(object: Concessionaria): boolean{
        console.log('logica de insert')
        return true
    }
    atualizar(object: Concessionaria): boolean{
        console.log('logica de atualizar')
        return true
    }
    remover(id: number): Concessionaria{
        console.log('logica de remover')
        return new Concessionaria('',[])
    }
    selecionar(id: number): Concessionaria{
        console.log('logica de selecionar')
        return new Concessionaria('',[])
    }
    selecionarTodos(): [any]{
        console.log('logica de Get All')
        return [new Concessionaria('',[])]
    }
}