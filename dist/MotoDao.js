"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = require("./Moto");
var MotoDao = /** @class */ (function () {
    function MotoDao() {
    }
    MotoDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('logica de remover');
        return new Moto_1.Moto();
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('logica de selecionar');
        return new Moto_1.Moto();
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('logica de Get All');
        return [new Moto_1.Moto()];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
