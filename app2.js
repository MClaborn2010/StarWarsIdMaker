let button = document.getElementById("next");
let profileDisplay = document.getElementById("profileDisplay");
let random = 1;

function generateName() {
  fetch(`https://swapi.co/api/people/${random}`)
    .then(res => res.json())
    .then(jsonRes => (profileDisplay.innerText = jsonRes.name))
    .catch(error => console.log("some error happen", error));
}
function moveForward() {
  random++;
  console.log(random);
}

button.addEventListener("click", () => {
  generateName();
  moveForward();
});
