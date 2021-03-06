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

const allButton = document.querySelectorAll("button");

for (let i = 0; i < allButton.length; i++) {
  const buttonElement = allButton[i];

  function addHoverClass() {
    return buttonElement.className.includes("hover")
      ? ""
      : (buttonElement.className += " hover");
  }
  buttonElement.addEventListener("mouseover", addHoverClass);
}

// question 5

const dataAnimalDog = document.querySelector("[data-animal=dog]");

function removeHoverClass() {
  return dataAnimalDog.className.includes("hover")
    ? dataAnimalDog.classList.remove("hover")
    : "";
}

dataAnimalDog.addEventListener("mouseout", removeHoverClass);

// question 6

const liArray = document.querySelectorAll("li");

for (let i = 0; i < liArray.length; i++) {
  const liElement = liArray[i];
  function logDataAttribute() {
    console.log(liElement.dataset.animal);
  }
  liElement.addEventListener("mouseover", logDataAttribute);
}

// question 7

const animal = "CoW";
const lowerCaseAnimal = animal.toLowerCase();

switch (lowerCaseAnimal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
    break;
}

// question 8

const sheeps = ["Malcolm", "Anders", "Marie"];

sheeps.forEach(sheep => console.log(sheep));

// question 9

let countHello = 1;

function greetHello() {
  console.log("Hello");

  countHello === 6 ? clearInterval(sayHello) : countHello++;
}

let sayHello = setInterval(greetHello, 500);

// question 10

const divContainer = document.querySelector(".container");

function replaceDivText() {
  const newHTML = (divContainer.innerText = "Text Updated");
  return newHTML;
}

const divTextUpdated = setTimeout(replaceDivText, 2000);
