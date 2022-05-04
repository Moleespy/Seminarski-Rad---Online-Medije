const banner = document.querySelector("#banner");
const images = ["fruitsalad", "healthyfood", "heltifud", "heltifud1", "heltifud2"];
const slideTime = 3000; // 3s
let i = 0;

const changeImage = function () {
  banner.style.backgroundImage = `url("images/${images[i]}.jpg")`;
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changeImage, slideTime);
};

window.addEventListener("load", function () {
  changeImage();
});
