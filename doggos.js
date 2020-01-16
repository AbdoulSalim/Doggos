/* const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggo() {
    fetch(BREEDS_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const img = document.createElement("img");
            img.src = data.message;
            img.alt = 'Cute doggo';
    
            document.querySelector('.doggos').appendChild(img);
        })
    }

const addButton = document.querySelector('.add-doggo');

addButton.addEventListener('click', addDoggo);
 */

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector(".breeds");

fetch(BREEDS_URL)
  .then(response => {
    return response.json();
  })
  .then(data => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);

    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement("option");
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
  });

select.addEventListener("change", event => {
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  getDoggo(url);
});

const img = document.querySelector(".dog-img");
const spinner = document.querySelector(".spinner");

function getDoggo(url) {
  spinner.classList.add("show");
  img.classList.remove("show");
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      img.src = data.message;
    });
}

img.addEventListener("load", () => {
  spinner.classList.remove("show");
  img.classList.add("show");
});
