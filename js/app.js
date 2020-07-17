// console.log('Prueba de consola ok');

// let count = 0;
// while (count <= 50) {
//     console.log("Valor de Count: " + count++ );
// }
// alert('hola mundo');

// let age = 36;
// let year = 2020;

// console.log(age, year);

// age=30;
// console.log(age);

// const points = 100;
// console.log(points);

// var score=70;
// console.log(score);

//string
// console.log('Hola Mundo');

// let email = 'octaviogodoyg@gmail.com';
// console.log(email);

// // string concatenation
// let firstname = 'octavio';
// let lastname ='Godoy';

// let fullname = firstname + ' ' + lastname;
// console.log(fullname);

// //geting characters
// console.log(fullname[2]);

//  //string length
//  console.log(fullname.length);

//  // string methods
//  console.log(fullname.toUpperCase());

//  let result =  fullname.toLocaleLowerCase();
//  console.log(result, fullname);

//  console.log('Primer @ ' + email.indexOf('@'));

//  console.log('última O: ' + email.lastIndexOf('o'));

//  console.log('metodo slice: '+ email.slice(2,5));

//  console.log('metodo substr: '+ email.substr(2,5));

//  console.log('metodo replace: '+ email.replace('o','X'));

//  let radius = 10;
//  const pi = 3.14;

//  console.log(radius, pi);

//  //math operators +, -, *, /, **, %

//  console.log(10/2);
//  let result = radius % 3;
//  let result = pi * radius ** 2;
//  let result = 5 * (10-3) ** 2;
// console.log(result);

// let likes =10;
// likes = likes +1;
// likes++;
// likes--;
// likes += 10;
// likes -=5;
// likes /=2;
// likes *=2;

//  console.log(likes);

// let result = 'the blog hav ' +likes+ ' likes';
// console.log(result);


//template string
const title = 'best reads 2020';
const author = 'Octavio';
const likes = 30;

//  concatenation way
// let result = 'the blog ' + title + ' from author ' + author + ' hav ' + likes+ ' likes.';
// console.log(result);

//template concatenation way
let result = `the blog called ${title} by ${author} has ${likes} likes.`;
console.log(result);

//