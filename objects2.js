const Bike = {
    name: 'Meteor 350',
    milege: 35,
    price: 350000,
}
console.log(typeof Bike);
console.log(Bike);
console.log(Bike.name);//To accesse specific property..

Bike.name = 'GT 650'; //To update property..
console.log(Bike);

Bike.newProperty = 'Silver color'; //To add new property..
console.log(Bike);

delete Bike.newProperty;
console.log(Bike);