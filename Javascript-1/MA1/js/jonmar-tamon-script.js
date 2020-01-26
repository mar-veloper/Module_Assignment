// question 1

const cat = {
  complain() {
    console.log("Meow");
  }
};

// question 2

const heading = document.querySelector("h3");

// question 3

heading.style.fontSize = "2em";

// question 4

heading.className = "subheading";

// question 5

const paragraphs = document.querySelectorAll("p");

// question 6

const resultsContainer = document.querySelector(".results");
const newParagraph = "<p>New paragraph</p>";

resultsContainer.innerHTML += newParagraph;

// question 7

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

function handleArrayIteration(catArray) {
  return catArray.forEach(item => console.log(item.name));
}

handleArrayIteration(cats);

// question 8

function handleElemTagWrapping_q8(array) {
  const names = array.map(item => item.name);
  let newHTML = "<h2>Question 8</h2>";
  names.map(name => (newHTML += `<h5>${name}</h5>`));

  return newHTML;
}

// question 9

const namesInCatsArray = handleElemTagWrapping_q8(cats);

resultsContainer.innerHTML += namesInCatsArray;

// question 10

function handleElemTagWrapping_q10(array) {
  let newHTML = "<h2>Question 10</h2>";

  array.map(
    item =>
      (newHTML += `
    <div>
        <h5>${item.name}</h5>
        <p>${item.age ? item.age : "Age unknown"}</p>
    </div>`)
  );

  return newHTML;
}

const catsInfo = handleElemTagWrapping_q10(cats);

resultsContainer.innerHTML += catsInfo;
