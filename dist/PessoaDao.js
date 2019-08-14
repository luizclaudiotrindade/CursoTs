"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('logica de atualizar');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('logica de remover');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('logica de selecionar');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('logica de Get All');
        return [new Pessoa_1.Pessoa('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
