//ES5
function sumaDos(valorA=8,valorB=78) {
    let suma = valorA + valorB;
    return suma;
};

// console.log(sumaDos());
// console.log(sumaDos(1));
// console.log(sumaDos(7, 12));


//ES6
const sumaTres = (valorA, valorB, valorC=10)=>{
    let suma = valorA + valorB + valorC;
    return suma;
};

console.log(sumaTres(1,2));

