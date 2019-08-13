import {Carro} from './Carro'
import {Concenssionaria} from './Concessionaria'
import {Pessoa} from './Pessoa'

/* Criando carros*/
let carroA= new Carro('ferrai',4)
let carroB= new Carro('cerato', 3)
let carroC= new Carro('fusca', 4)
let listaDeCarros: Carro[]= [carroA,carroB,carroC]
/*fim da lista de carros */
let concenssionaria = new Concenssionaria('Ibura',listaDeCarros);
console.log(concenssionaria.mostrarListaDecarros())


let pessoa = new Pessoa('jose', 'fusca')
concenssionaria.mostrarListaDecarros().map((carro:Carro) => {
    if(carro['modelo'] == pessoa.dizerCarroPreferido()){
        //comprar carro
        pessoa.comprarCarro(carro)

    }
})
let cliente2 = new Pessoa('luiz','ferrai')
concenssionaria.mostrarListaDecarros().map((carro:Carro)=>{
    if(carro['modelo']== cliente2.dizerCarroPreferido()){
        //comprar carro
        cliente2.comprarCarro(carro)
    }
})
console.log(cliente2)