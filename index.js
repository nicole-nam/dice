//variables
const player1 = document.querySelector(".img1");
const player2 = document.querySelector(".img2");
const headerText = document.querySelector("h1");

//generate random number
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

//change dice images
player1.src = `./images/dice${randomNumber1}.png`;
player2.src = `./images/dice${randomNumber2}.png`;

//winner text
if (randomNumber1 > randomNumber2) {
  headerText.innerText = "🚩 Player1 wins!";
} else if (randomNumber2 > randomNumber2) {
  headerText.innerText = "Player2 wins! 🚩";
} else {
  headerText.innerText = "Draw! ";
}
