/*step 1: grab all the btns and images from index.html and ssave as object in js
  step 2: fucntion to reveal the image and hide
  step 3: add event listener on to the button to make them clickable and do stuff
  <!--citation for how to hide image: https://www.quora.com/How-do-you-make-a-hidden-image-in-HTML-->
*/

let btnCat = document.getElementById("btn-cat");
let btnDog = document.getElementById("btn-dog");
let btnCow = document.getElementById("btn-cow");

let imgCat = document.getElementById("img-cat");
let imgDog = document.getElementById("img-dog");
let imgCow = document.getElementById("img-cow");

const hideCatBtn = document.getElementById("hide-cat");
const hideDogBtn = document.getElementById("hide-dog");
const hideCowBtn = document.getElementById("hide-cow");

function revealImage(img, hideBtn) {
  img.style.display = "block";
  hideBtn.style.display = "block";
}

function hideImage(img, hideBtn) {
  img.style.display = "none";
  hideBtn.style.display = "none";
}

btnCat.addEventListener("click", function () {
  revealImage(imgCat, hideCatBtn);
});

btnDog.addEventListener("click", function () {
  revealImage(imgDog, hideDogBtn);
});

btnCow.addEventListener("click", function () {
  revealImage(imgCow, hideCowBtn);
});

// Event listeners for hide buttons
hideCatBtn.addEventListener("click", function () {
  hideImage(imgCat, hideCatBtn);
});

hideDogBtn.addEventListener("click", function () {
  hideImage(imgDog, hideDogBtn);
});

hideCowBtn.addEventListener("click", function () {
  hideImage(imgCow, hideCowBtn);
});
