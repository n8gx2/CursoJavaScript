// objects literals
let user ={
    name: 'octavio',
    age: 36,
    email: 'octaviogodoyg@gmail.com',
    location: 'santiago aus chile',
    blogs: ['why mac and cheese rules','10 things to make whit marmite']
};
// console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user['email']);
user['name'] = 'vanessa';
console.log(user['name']);
console.log(typeof user);