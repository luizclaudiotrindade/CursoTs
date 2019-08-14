//import {concessionariaDao} from './concessionariaDao'
import {Concessionaria} from './Concessionaria'

//import { PessoaDao } from './PessoaDao'
import { Pessoa } from './Pessoa'

//import {CarroDao} from './CarroDao'
import {Carro} from './Carro'

import { Moto } from './Moto'
import { Dao } from './Dao';
//import {MotoDao} from './MotoDao'

let dao: Dao<Concessionaria>= new Dao<Concessionaria>()
//let dao : concessionariaDao = new concessionariaDao()
let concessionaria: Concessionaria= new Concessionaria('',[])
dao.inserir(concessionaria)

//let dao2 : PessoaDao =  new PessoaDao()
let pessoaDaoGenerica: Dao<Pessoa>= new Dao<Pessoa>()
let pessoa: Pessoa = new Pessoa('','')
pessoaDaoGenerica.atualizar(pessoa)

//let dao3 : CarroDao = new CarroDao()
let carroGenerico: Dao<Carro>= new Dao<Carro>()
let carro: Carro = new Carro('',3)
carroGenerico.remover(1)

//let dao4 : MotoDao= new MotoDao()
let motoGenerico: Dao<Moto>= new Dao<Moto>()
let moto : Moto = new Moto()
motoGenerico.selecionar(1)