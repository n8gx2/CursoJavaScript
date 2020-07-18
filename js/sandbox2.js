// function declaration
// function greet(){
//     console.log('hello there');
// }

// function expression
// const speak = function(name){
//     console.log(`ggod day ${name}`);
// };

// const speak = function(name ='luigi', time ='night'){
//     console.log(`good ${time} ${name}`);
// };

// // greet();
// speak('octavio', 'day');


// regular function
// const calcArea = function( radius){
//     return 3.14 * radius**2;
// }

// const calcArea = (radius)=>{
//     return 3.14 * radius**2;
// }

// const area = calcArea(5);
// console.log('area ist: ', area);


// practis arrow function
// const greet = function(){
//     return 'helo, world';   
// };

// const greet = () => 'hello, world';

// const result = greet();
// console.log(result);


// const bill = function (products, tax) {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax)=> {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30],0.2));


// const name ='octavio';

// //functions

// const greet = ()=> 'hello';

// let resultOne = greet();
// console.log(resultOne);

// let resultTwo = name.toUpperCase() ;
// console.log(resultTwo);


// const myfunc = (callbackFunc)=>{
//     // do something
//     let value =50;
//     callbackFunc(value);
// };

// myfunc(function(value){
//     console.log(value);
// });


// let people=['mario','luigi','toad','pege','chinli'];

// // people.forEach(function(person){
// //     console.log(person);
// // });

// // people.forEach(person, index => {
// //     console.log(index, person);
// // });

// const logPerson = (person, index)=>{
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');
let people=['mario','luigi','toad','pege','chinli'];
let html =``;
people.forEach(function(person){
    // create plantille html
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;
