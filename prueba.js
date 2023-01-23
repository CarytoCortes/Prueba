// Funcion para obtener pares de un arreglo

//Si le paso valores null o undefined me genera un 

const getPairs = (array) => { return array.filter(a=> a % 2 ==0);}

getPairs([1,2,3,4,5,6,7,8,9])
getPairs([100,22,30,40,57,67,71,80,90])

console.log(getPairs([1,2,3,4,5,6,7,8,9]));
console.log(getPairs([100,22,30,40,57,67,71,80,90]));

//Refactorizada

const getPairs = (array) => { 
    if (array === null || array === undefined) {
      return 'La entrada es invalida, pase los datos del arreglo'
    }
    return array.filter(a=> a % 2 ==0);
  }

console.log(getPairs([1,2,3,4,5,6,7,8,9]));
console.log(getPairs([100,22,30,40,57,67,71,80,90]));

//Función para obtener numeros primos 

const getPrimes = (array) => {
    return array.filter(num => {
    if (num < 2) {
    return false;
    }
    for (let i = 2; i < num; i++) {
    if (num % i === 0) {
    return false;
    }
    }
    return true;
    });
    }
    console.log(getPrimes([1,2,3,4,5,6,7,8,9]));
    console.log(getPrimes([100,22,30,40,57,67,71,80,90]));

