// question 1

let petArray = ["cat", "cow", "dog"];

// question 2

console.log(petArray[1]);

// question 3

petArray.push("sheep");
console.table(petArray);

// qeustion 4

console.log(`there are ${petArray.length} items inside the petArray`);

// question 5

let catObject = {
  name: "Garfield",
  color: ["orange", "black", "yellow"],
  age: 40 + " years old"
};

// question 6

console.log(catObject.age);

// question 7

catArray = [
  {
    name: "Garfield",
    color: ["orange", "black", "yellow"],
    age: 40 + " years old"
  }
];

// question 8

for (let i = 0; i < catArray.length; i++) {
  const element = catArray[i];
  console.log(element);
}

// question 9

function logToConsole(value) {
  console.log(value);
}

// question 10

logToConsole("donkey");
