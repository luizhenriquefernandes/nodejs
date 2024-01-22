/**Aula 2 de node objetivo da aula fazer funções de operações básicas e rodar em node */
function soma(x,y) {
    return x+y;    
}
function sub(x,y){
    return x-y;
}
function div(x,y){
    return x/y;
}
function mult(x,y){
    return x * y;
}
let r = soma(10,5);
let r1 = sub(10,5);
let r2 = div(10,2);
let r3 = mult(10,3);
console.log(`A soma é ${r}`);
console.log(`A subtração é ${r1}`);
console.log(`A divisão é ${r2}`);
console.log(`A multiplicação é  ${r3}`);