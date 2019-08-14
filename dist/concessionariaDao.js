"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var concessionariaDao = /** @class */ (function () {
    function concessionariaDao() {
    }
    concessionariaDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    concessionariaDao.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    concessionariaDao.prototype.remover = function (id) {
        console.log('logica de remover');
        return new Concessionaria_1.Concessionaria('', []);
    };
    concessionariaDao.prototype.selecionar = function (id) {
        console.log('logica de selecionar');
        return new Concessionaria_1.Concessionaria('', []);
    };
    concessionariaDao.prototype.selecionarTodos = function () {
        console.log('logica de Get All');
        return [new Concessionaria_1.Concessionaria('', [])];
    };
    return concessionariaDao;
}());
exports.concessionariaDao = concessionariaDao;
