"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDecarros = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.fornecerHorarioFuncionamento = function () {
        return 'Aberto seg a sext das 08:00 as 18h';
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
