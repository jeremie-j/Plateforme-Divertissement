upButton = document.querySelector("#UP");
function DispButton() {
  if (window.scrollY > window.innerHeight-200) {
    upButton.style.transform = "translateX(-180px)";
    upButton.style.transitionDuration = "1s";
  } else {
    upButton.style.transform = "translateX(0px)";
    upButton.style.transitionDuration = "1s";
  }
}

window.addEventListener("scroll", function () {
  DispButton();
});
