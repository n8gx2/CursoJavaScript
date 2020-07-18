//for loops

// for(let i =0;i <5;i++){
//     console.log('un loop ' + i);
//     console.log('un loop ',  i);
// }
// console.log('loop finalizado...');

// const names=['shaun','mario','luigi'];
// for(let i =0;i<names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}<div>`;
//     console.log(html);
// }

// while loops
// let i =5;
// while(i<5){
//     console.log('in while loop ' + i);
//     i++;
// }

// do{
//     console.log('in while loop ' + i);
//     i++;
// }while(i<5);

// if statements
// const age =20;
// if (age>20) {
//     console.log('you are over 20 year old');
// }


// const ninjas=['octavio','ryu','chun-li','mario'];
// if (ninjas.length>4){
//     console.log('that´s a lot de ninjas');
// }

// const password = 'p@ssword1234';
// if (password.length>=12 && password.includes('@')) {
//     console.log('that password is mighty strong');
// }else if (password.length >=8 || password.includes('@') && password.length >=5) {
//     console.log('that password is long enough')
// }else{
//     console.log('password is not long enough');
// }



// logical Notification(!)
// let user = false;
// if (user ) {
//  console.log();   
// }

// break and continue

// const scores = [50,25,0,30,100,20,10];

// for(let i =0;i< scores.length;i++){

//     if (scores[i]===0){
//         continue;
//     }
//     console.log('congrats, you got the top score!', scores[i]);

//     if (scores[i]===100){
//         console.log('congrats, you got the top score!');
//         break;
//     }

// }


// const grade = 'P';

// switch statements

// if (grade==='A') {
// } else if (grade==='B') { 
// } else if (grade==='C') { 
// } else if (grade==='D') { 
// } else if (grade==='E') { 
// } else {
// }

// switch (grade) {
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got an B!');
//         break;
//     case 'C':
//         console.log('you got an C!');
//         break;
//     case 'D':
//         console.log('you got an D!');
//         break;
//     case 'E':
//         console.log('you got an E!');
//         break;
//     default:
//         console.log('not a valid grade');
//         break;
// }


// variables and block scope

let age =30;

if (true) {
    let age = 40;
    let name ='octavio';
    console.log('inside 1st code block ', age, name);

    if (true) {
        let age = 50;
        console.log('inside 1st code block ', age, name);
        var test = 'prueba';
    }
}
console.log('outside code block ',age, name, test);
