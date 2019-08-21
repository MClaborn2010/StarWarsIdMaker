const button = document.getElementById("next");
const name = document.querySelector(".bottom-area");
let min = 1;
let max = 87;
const clientId =
  "31819371677-90pb6usu1i56r1a9qokjmf344u7knpeb.apps.googleusercontent.com";
const secret = "LFFVjk2G1d45nrBTOJDwDSTb";

function getName() {
  let number = Math.floor(Math.random() * (+max - +min) + +min);
  fetch(`https://swapi.co/api/people/${number}/`)
    .then(response => response.json())
    .then(
      json =>
        (name.innerHTML = `
          <p>
          Name:  
          ${JSON.stringify(json.name)}
          </p>
          <p>
          Gender:  
          ${JSON.stringify(json.gender)}
          </p>
          <p>
          Height:  
          ${JSON.stringify(json.height)}
          </p>
          <p>
          Skin Color:  
          ${JSON.stringify(json.skin_color)}
          </p>
          <p>
          Hair Color:  
          ${JSON.stringify(json.hair_color)}
          </p>
          `)
    )
    .catch(err => console.log(err));
}

function getImage() {
  fetch(`https://photoslibrary.googleapis.com/v1/albums/`)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

button.addEventListener("click", getName);
button.addEventListener("click", getImage);
