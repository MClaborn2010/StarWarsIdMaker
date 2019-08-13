const data = [
  {
    name: "Han Solo",
    age: 32,
    gender: "male",
    alliance: "Himself",
    location: "Mos Eisley, Corellia",
    image:
      "https://vignette.wikia.nocookie.net/starwars/images/1/1f/Han_Solo_Galaxies_card_%28SoC%29.JPG/revision/latest?cb=20130718004811"
  },
  {
    name: "Leia Organa",
    age: 23,
    gender: "female",
    alliance: "The Resistance",
    location: "Alderaan, Polis Massa",
    image: "https://i.kym-cdn.com/photos/images/newsfeed/001/058/293/4da.jpg"
  },
  {
    name: "Luke SkyWalker",
    age: 23,
    gender: "male",
    alliance: "The Force",
    location: "Tatooine, Polis Massa, Lars Farm",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Luke-and-Lightsaber-featured-social-image.jpg"
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById("next").addEventListener("click", nextProfile);
// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class='list-group'>
    <li class = 'list-group-item'>Name: ${currentProfile.name}</li>
    <li class = 'list-group-item'>Age: ${currentProfile.age}</li>
    <li class = 'list-group-item'>Location: ${currentProfile.location}</li>
    <li class = 'list-group-item'>Alliance: ${currentProfile.alliance}</li>
    </ul>
    `;
    document.getElementById("imageDisplay").innerHTML = `<img src='${
      currentProfile.image
    }'>`;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}

let button = document.getElementById("next");

function generateId() {
  axios.get("http://swapi.co/api/people/1").then(function(response) {
    console.log(response);
  });
}

button.addEventListener("click", sayHello);
