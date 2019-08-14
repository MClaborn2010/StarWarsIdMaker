let button = document.getElementById("next");
let name = document.getElementById("name");
let hairColor = document.getElementById("hair-color");
let birthYear = document.getElementById("birth-year");
let gender = document.getElementById("gender");
let increment = 1;

function generateName() {
  fetch(`https://swapi.co/api/people/${increment}`)
    .then(res => res.json())
    .then(jsonRes => (name.innerText = jsonRes.name))
    .catch(error => console.log("some error happen", error));
}
function generateHairColor() {
  fetch(`https://swapi.co/api/people/${increment}`)
    .then(res => res.json())
    .then(jsonRes => (hairColor.innerText = jsonRes.hair_color))
    .catch(error => console.log("some error happen", error));
}
function generateBirthYear() {
  fetch(`https://swapi.co/api/people/${increment}`)
    .then(res => res.json())
    .then(jsonRes => (birthYear.innerText = jsonRes.birth_year))
    .catch(error => console.log("some error happen", error));
}
function generateGender() {
  fetch(`https://swapi.co/api/people/${increment}`)
    .then(res => res.json())
    .then(jsonRes => (gender.innerText = jsonRes.gender))
    .catch(error => console.log("some error happen", error));
}
function moveForward() {
  increment++;
  console.log(increment);
}

button.addEventListener("click", () => {
  generateName();
  generateBirthYear();
  generateHairColor();
  generateGender();
  moveForward();
});
