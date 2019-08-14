"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var CarroDao = /** @class */ (function () {
    function CarroDao() {
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('logica de remover');
        return new Carro_1.Carro('', 0);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('logica de selecionar');
        return new Carro_1.Carro('', 0);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('logica de Get All');
        return [new Carro_1.Carro('', 0)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
