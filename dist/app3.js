"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var carro = new Carro_1.Carro('veloster', 3);
var moto = new Moto_1.Moto();
moto.acelerar();
console.log(carro);
console.log(moto);