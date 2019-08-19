let button = document.getElementById("next");
let name = document.getElementById("name");
let hairColor = document.getElementById("hair-color");
let birthYear = document.getElementById("birth-year");
let gender = document.getElementById("gender");
let increment = -1;

button.addEventListener("click", function() {
  getName(), getBirthYear(), getGender(), getHairColor(), incrementUp();
});

function getName() {
  fetch("https://swapi.co/api/people/")
    .then(response => response.json())
    .then(
      json => (name.innerText = "Name: " + json.results[`${increment}`].name)
    )
    .catch(err => console.log(err));
}
function getHairColor() {
  fetch("https://swapi.co/api/people/")
    .then(response => response.json())
    .then(
      json =>
        (hairColor.innerText =
          "Hair Color: " + json.results[`${increment}`].hair_color)
    )
    .catch(err => console.log(err));
}
function getBirthYear() {
  fetch("https://swapi.co/api/people/")
    .then(response => response.json())
    .then(
      json =>
        (birthYear.innerText =
          "Birth Year: " + json.results[`${increment}`].birth_year)
    )
    .catch(err => console.log(err));
}

function getGender() {
  fetch("https://swapi.co/api/people/")
    .then(response => response.json())
    .then(
      json =>
        (gender.innerText = "Gender: " + json.results[`${increment}`].gender)
    )
    .catch(err => console.log(err));
}
function incrementUp() {
  increment++;
  console.log(increment);
}
