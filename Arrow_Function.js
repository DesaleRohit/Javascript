const arrowFunction1 = () => {
    console.log('Good job');
};
arrowFunction1();

const arrowFunction2 = (a, b) => {
    console.log(a + b);
};
arrowFunction2(10, 5);

const arrowFunction3 = (p1) => {
    console.log(p1 + 2);
};
arrowFunction3(20);

const arrowFunction4 = p1 => {    // If we pass a single paramter in Arrow Function the parenthesis can't compulsory...
    console.log(p1 + 5);
};
arrowFunction4(5);


const arrowFunction5 = () => 2 + 3;  //Arrow function in OneLine...
console.log(arrowFunction5()); 