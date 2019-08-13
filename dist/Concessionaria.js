"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concenssionaria = /** @class */ (function () {
    function Concenssionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concenssionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concenssionaria.prototype.mostrarListaDecarros = function () {
        return this.listaDeCarros;
    };
    return Concenssionaria;
}());
exports.Concenssionaria = Concenssionaria;
