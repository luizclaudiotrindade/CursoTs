import { Carro } from "./Carro";
import { Moto } from "./Moto";
import {ConcessionariaInterface} from './ConcessionariaInterface'
import { Concenssionaria } from "./Concessionaria";
let carro = new Carro('veloster',3)
let moto = new Moto()
let concessionaria = new Concenssionaria('',[])
console.log(concessionaria.fornecerHorarioFuncionamento())
moto.acelerar()
console.log(carro)
console.log(moto)