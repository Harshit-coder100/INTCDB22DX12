// function add(a, b){
//     return a+b;
// }

// // console.log(add(2, 3));

//  let sum = add;

//  function average(a, b, fn){
//      return fn(a, b) /2;
//  }

// let result  =  average(10, 20, sum);


// console.log(result)


function compareBy(propertyName){
    return function(a, b){
        let x= a[propertyName],  y = b[propertyName];

        if(x>y){
            return 1;
        }
        else if(x<y){
            return -1;
        }
        else {
            return 0;
        }
    }
}


let products = [
    {name: 'iPhone', price: 100000},
    {name: 'samsung phone', price: 4567},
    {name: 'sony tv', price: 345635},
]



console.log("Products sorted by price");
products.sort(compareBy('price'));

console.table(products)