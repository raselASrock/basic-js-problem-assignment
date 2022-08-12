const numbers = [45, 15, 50, 75, 86, 95, 19, 35];
// for( i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for( const number of numbers ){
//     console.log(number);
// }

const products = [
    {id: 1, name: "xaomi phone", price: 12000},
    {id: 2, name: "iphone", price: 12000},
    {id: 3, name: "macbook air", price: 112000},
    {id: 4, name: "lenovo yoga", price: 12000},
    {id: 5, name: "dell inspiron", price: 12000},
    {id: 6, name: "samsung phone", price: 12000},
    {id: 7, name: "nokia phone", price: 12000},
    {id: 8, name: "one phone", price: 12000},
];

// for ( const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched = [];
    for(product of products){
        if( product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, "phone");
console.log(result)