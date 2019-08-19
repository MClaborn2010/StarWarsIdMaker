let button = document.getElementById("next");
let name = document.querySelector(".bottom-area");
let min = 1;
let max = 87;
let number = Math.floor(Math.random() * (+max - +min) + +min);

function getName() {
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
  number++;
}

button.addEventListener("click", getName);
