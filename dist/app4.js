"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {concessionariaDao} from './concessionariaDao'
var Concessionaria_1 = require("./Concessionaria");
//import { PessoaDao } from './PessoaDao'
var Pessoa_1 = require("./Pessoa");
//import {CarroDao} from './CarroDao'
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var Dao_1 = require("./Dao");
//import {MotoDao} from './MotoDao'
var dao = new Dao_1.Dao();
//let dao : concessionariaDao = new concessionariaDao()
var concessionaria = new Concessionaria_1.Concessionaria('', []);
dao.inserir(concessionaria);
//let dao2 : PessoaDao =  new PessoaDao()
var pessoaDaoGenerica = new Dao_1.Dao();
var pessoa = new Pessoa_1.Pessoa('', '');
pessoaDaoGenerica.atualizar(pessoa);
//let dao3 : CarroDao = new CarroDao()
var carroGenerico = new Dao_1.Dao();
var carro = new Carro_1.Carro('', 3);
carroGenerico.remover(1);
//let dao4 : MotoDao= new MotoDao()
var motoGenerico = new Dao_1.Dao();
var moto = new Moto_1.Moto();
motoGenerico.selecionar(1);
