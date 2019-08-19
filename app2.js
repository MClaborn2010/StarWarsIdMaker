let button = document.getElementById("next");
let name = document.getElementById("name");
let number = 1;

function getName() {
  fetch(`https://swapi.co/api/people/${number}/`)
    .then(response => response.json())
    .then(
      json =>
        (name.innerText =
          "Name: " +
          JSON.stringify(json.name) +
          "Height: " +
          JSON.stringify(json.height) +
          "Mass: " +
          JSON.stringify(json.mass) +
          "Hair Color: " +
          JSON.stringify(json.hair_color) +
          "Skin Color: " +
          JSON.stringify(json.skin_color) +
          "Gender: " +
          JSON.stringify(json.gender))
    )
    .catch(err => console.log(err));
  number++;
}

button.addEventListener("click", getName);
