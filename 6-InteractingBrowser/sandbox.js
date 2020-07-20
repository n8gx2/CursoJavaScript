// const para = document.querySelector('div.error');
// console.log(para);

// const para = document.querySelectorAll('p');
// const para = document.querySelectorAll('.error');
// console.log(para[2]);

// const para = document.getElementById('page-title');
// console.log(para);

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[2]);
// errors.array.forEach(error => {
//     console.log(error);
// });


// const parag = document.getElementsByTagName('P');
// console.log(parag);
// console.log(parag[1]);

// const parag = document.querySelector('P');
// console.log(parag.innerText);
// parag.innerText = " ninjas are awesome";

// const parag = document.querySelector('P');
// const parags = document.querySelectorAll('P');
// parags = forEach(parag => {
//     console.log(parag.innerText);
// });

// const content = document.querySelector('.content');
// // console.log(content.innerHTML);
// // content.innerHTML ='<h2>este es el nuevo H2</h2>';
//  const people = ['octavio','amador', 'vaneesa'];

//  people.forEach(person => {
//      content.innerHTML += `<p>${person}</p>`;
//  });

// const link = document.querySelector('a');

// console.log(link.getAttribute("href"));
// link.setAttribute("href","https://www.thenetninja.co.uk/");
// link.innerText = "The web Ninja"
// console.log(link.getAttribute("href"));


// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));

// mssg.setAttribute('class','success')
// console.log(mssg.getAttribute('class'));

// const title = document.querySelector('h1');
// console.log(title.innerText);
// title.setAttribute('style',' color:purple');
// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = "50px";
// title.style.color = "orange";
// title.style.fontSize = "30px";


// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const parag = document.querySelectorAll('P');

parag.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    }
    if (p.textContent.includes('success')) {
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');