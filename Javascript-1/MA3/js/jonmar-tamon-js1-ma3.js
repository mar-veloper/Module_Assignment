// question 1
handleSubtraction = (a, b) => a - b;

const substract1 = handleSubtraction(10, 5);

console.log(substract1);

//question 2
const baseUrl = "https://api.rawg.io/api/games?genres=sports";

function getApi(api, func) {
  fetch(api)
    .then(response => response.json())
    .then(json => func(json))
    .catch(() => (window.location.href = "error.html"));
}

// Uncomment the function call down to see question 2 !!!!!!!!!!
// getApi(baseUrl, logGamesNames);

function logGamesNames(json) {
  const gamesNames = json.results.map(result => console.log(result.name));
}

// question 3
const sentence1 = "These cats are outrageous";
const sentence2 = sentence1.replace("cats", "giraffes");

console.log("Question 3: " + sentence1);
console.log("Question 3: " + sentence2);

//question 4

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);

// console.log(queryString);
// console.log(params);

// let userId = params.get("userId");
// console.log(userId);

// switch (true) {
//   case userId > 0 && userId < 10:
//     document.location.href = "first.html";
//     break;
//   case userId > 10:
//     document.location.href = "second.html";
//     break;

//   default:
//     document.location.href = "third.html";
//     break;
// }
