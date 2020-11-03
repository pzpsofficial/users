const users = [
    {
        name: 'John',
        tekst: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, corrupti.',
        img: '1.png'
    },
    {
        name: 'Henry',
        tekst: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        img: '2.png'
    },
    {
        name: 'Leo',
        tekst: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        img: '3.png'
    },
    {
        name: 'Laura',
        tekst: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, corrupti. Lorem ipsum, dolor sit amet consectetur.',
        img: '4.png'
    },
    {
        name: 'Jessica',
        tekst: 'Lorem ipsum, dolor sit elit. Doloremque, corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        img: '5.png'
    },
];

const userImg = document.querySelector('#photo');
const userName = document.querySelector('#name');
const userMessage = document.querySelector('#message');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
let createdUsers = [];

class User {
    constructor(img, name, message) {
        this.img = img;
        this.name = name;
        this.message = message;
    };

    addProperties() {
        userImg.src = `Img/${this.img}`;
        userName.textContent = this.name;
        userMessage.textContent = this.message;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < users.length; i++) {
        createdUsers[i] = new User(users[i].img, users[i].name, users[i].tekst);
    }
    createdUsers[index].addProperties();
})

prev.addEventListener('click', () => {
    index -= 1;
    if (index < 0) {
        index = createdUsers.length - 1;
    }
    createdUsers[index].addProperties();
})

next.addEventListener('click', () => {
    index += 1;
    if (index > createdUsers.length - 1) {
        index = 0;
    }
    createdUsers[index].addProperties();
})