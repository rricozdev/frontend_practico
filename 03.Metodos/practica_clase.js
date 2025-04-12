//                item
const items = ["manzana", "pera", "manzana", "banano", "mango"];
//                 i        
// const uniqueItems = [];

// console.log(uniqueItems.length) // ---> 0

//  usando ciclo `for`
// for(let i = 0; i < items.length; i++){
//     // i --> indice ¿qué necesitamos? el item
//     const item = items[i];
//     // i --> 0 --> "manzana"
//     // i --> 1 --> "pera"

//     // indexOf() ---> me devuelve el indice 
//     if(uniqueItems.indexOf(item) === -1 ){
//         uniqueItems.push(item)
//     }
// };

// usar el método .filter();
const uniqueItems = items.filter((item, index,array) => {
    return array.indexOf(item) === index;
});

console.log("uniqueItems", uniqueItems);