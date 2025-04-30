//const numbers = [4,2,3,6,9];

// Cuál es la sumatoria de los elementos dentro del array `numbers`


// const array = [4, 2, 3, 6, 9];
const array = [];

// Imperativo ¿Qué hacer ? y Cómo hacerlo
function sumatoria() {
  let sumTotal = 0;
  for (let i = 0; i < array.length; i++) {
    sumTotal += array[i];
    console.log(sumTotal)
  }
  return sumTotal;
}

console.log(sumatoria()); 

// Declarativo --> QUÉ
function sumatory(){
    let initial = 0;
    return array.reduce((preValue, currentValue) => preValue + currentValue, initial);
};

console.log(sumatory());



// Explicación de MDN
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
