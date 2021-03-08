const player1 = document.querySelector(".img1");

//generate random number
const randomNumber1 = Math.floor(Math.random() * 6) + 1;

//change dice images
player1.src = `./images/dice${randomNumber1}.png`;
