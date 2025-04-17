function greeting() {
    console.log("hello user");
}
greeting();


const fun1 = function greeting() {
    console.log('Function inside variable..');
}
console.log(fun1);
fun1();


const fun2 = function () {
    console.log('Another method..'); //Shortmethod to create function in variable..
}
console.log(fun2);
fun2();


function display(param) {
    param();                 //passing a function into another function..[callback]
}
display(function show() {   //created function inside the parameter..
    console.log('Function inside the Parameter')
})


setTimeout(function () {
    console.log('This function run after three second..'); //in setTimeout() first parameter is future parameter that's runs code after 3000ms..
}, 3000);                                                  //but this function can't wait 3000ms it go and run next block of code..

console.log('Next Line..');

setInterval(function () {       //In this setInterval() first parameter is the future parameter that's run code 1000ms again & again..
    console.log('Hi Rohit..');
    console.log('Good job..')
}, 1000);