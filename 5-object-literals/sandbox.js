// // objects literals
// let user ={
//     name: 'octavio',
//     age: 36,
//     email: 'octaviogodoyg@gmail.com',
//     location: 'santiago aus chile',
//     blogs: ['why mac and cheese rules','10 things to make whit marmite']
// };
// // console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user['email']);
// user['name'] = 'vanessa';
// console.log(user['name']);
// console.log(typeof user);


// objects literals

// const blogs=[
//     {title: 'why mac and cheese rules', likes:30},
//     {title: '10 things to make whit marmite', likes:25}
// ];
// console.log(blogs);

// let user ={
//     name: 'octavio',
//     age: 36,
//     email: 'octaviogodoyg@gmail.com',
//     location: 'santiago aus chile',
//     blogs: ['why mac and cheese rules','10 things to make whit marmite'],
//     login: function() {
//         console.log('the user logged in');
//     },
//     logout: function() {
//         console.log('the user logged out');
//     },
//     logBlogs: function() {
//         // console.log(this.blogs);
//         console.log('this user has written following blogs.');
//         this.blogs.forEach(blogs => {
//             console.log(blogs);
//         })
//     },
//     logBlogs2: ()=> {
//         console.log(this.blogs);
//     }      
// };
// user.login();
// user.logout();
// user.logBlogs();
// user.logBlogs2();
// console.log(this);

// const name= 'octavio';
// name.toUpperCase();





// math objects
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// const random = Math.random();
// console.log(random);
// console.log(Math.round()*100);


const userOne ={ user:'octavio', age:36  };
const userTwo = userOne;

console.log(userOne. userTwo);
userOne.age = 40;   
console.log(userOne. userTwo);