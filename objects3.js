const product = {
    name: 'Jeans',
    size: 45,
    color: 'Black',
    newPropery: function demo()   //created a function inside object..
    {
        console.log('Function inside the object');
    }
};
const product2 = {
    name: 'T-shirt',
    size: 'XL',
    color: 'Red',
    rating : {           //nested object..
        price: 1000,
        stars: 5,
        fun: function demo2()
        {
            console.log('Function inside nested objects');  //function inside nested object..
        }
    }
};
console.log(product);
product.newPropery();

console.log(product2);
console.log(product2.rating.price);
console.log(product2.rating.stars);
console.log(product2.rating.fun());

