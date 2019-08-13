function solution(X:number, Y:number, D:number) {
    // write your code in JavaScript (Node.js 8.9.4)
    let resultado=0
    for(let i=0; i<=Y; i++){
        if(X<Y){
            X+=D
            resultado+=1   
        }
    }
    return resultado
}
console.log(solution(10,80,30))