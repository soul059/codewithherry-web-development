// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function Totalizer(product){
    let total = 0;
    product.forEach(element => {
        total += element.price * quntity;
    });

    return total;
}