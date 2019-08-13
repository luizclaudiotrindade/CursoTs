"use strict";
function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    var resultado = 0;
    for (var i = 0; i <= Y; i++) {
        if (X < Y) {
            X += D;
            resultado += 1;
        }
    }
    return resultado;
}
console.log(solution(10, 80, 30));
