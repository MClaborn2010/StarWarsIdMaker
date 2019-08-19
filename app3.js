let next = document.getElementById("next");
let api = "https://swapi.co/api/people/1";
let name = document.querySelector(".results");
let userInput = document.getElementById("input-bar");

function generateName() {
  userInput.addEventListener("keyup", e => {
    fetch(api)
      .then(res => res.json())
      .then(jsonRes => (name.innerText = jsonRes.name))
      .catch(error => console.log("some error happen", error));
  });
}

generateName();

// searchUser.addEventListener("keyup", e => {
//   // Get input text
//   const userText = e.target.value;

//   if (userText !== "") {
//     // Make http call
//     github.getUser(userText).then(data => {
//       if (data.profile.message === "Not Found") {
//         // Show alert
//         ui.showAlert("User not found", "alert alert-danger");
//       } else {
//         // Show profile
//         ui.showProfile(data.profile);
//         ui.showRepos(data.repos);
//       }
//     });
//   } else {
//     // Clear profile
//     ui.clearProfile();
//   }
// });
