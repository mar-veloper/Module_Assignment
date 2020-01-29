// question 1

const myFunctionExpression = function(name, lastName) {
  console.log(`My name is ${name} ${lastName}`);
};

myFunctionExpression("Jonmar", "Tamon");

// question 2

const clickMeButton = document.querySelector(".btn");

function returnIWasClick() {
  console.log("I was clicked");
}

clickMeButton.addEventListener("click", returnIWasClick);

// question 3

const firstNameInput = document.querySelector("#firstName");

function logKeyPressed(event) {
  console.log(event.key);
}

firstNameInput.addEventListener("keydown", logKeyPressed);

// question 4

const button = document.querySelectorAll("button");
console.log(button);
