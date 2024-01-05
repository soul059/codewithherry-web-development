// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products,filtered){
    return products.filter((v)=>{
        if(filtered(v))
        return v;
    })
}

let product = [
    {name: 'Product 1', price: 5},
    {name: 'Product 2', price: 10},
    {name: 'Product 3', price: 15}
];

let cheapProducts = filterProducts(product, function(p) {
    return p.price < 10;
});

console.log(cheapProducts);  // Prints: [ { name: 'Product 1', price: 5 } ]