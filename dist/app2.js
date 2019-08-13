"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
/* Criando carros*/
var carroA = new Carro_1.Carro('ferrai', 4);
var carroB = new Carro_1.Carro('cerato', 3);
var carroC = new Carro_1.Carro('fusca', 4);
var listaDeCarros = [carroA, carroB, carroC];
/*fim da lista de carros */
var concenssionaria = new Concessionaria_1.Concenssionaria('Ibura', listaDeCarros);
console.log(concenssionaria.mostrarListaDecarros());
var pessoa = new Pessoa_1.Pessoa('jose', 'fusca');
concenssionaria.mostrarListaDecarros().map(function (carro) {
    if (carro['modelo'] == pessoa.dizerCarroPreferido()) {
        //comprar carro
        pessoa.comprarCarro(carro);
    }
});
var cliente2 = new Pessoa_1.Pessoa('luiz', 'ferrai');
concenssionaria.mostrarListaDecarros().map(function (carro) {
    if (carro['modelo'] == cliente2.dizerCarroPreferido()) {
        //comprar carro
        cliente2.comprarCarro(carro);
    }
});
console.log(cliente2);
