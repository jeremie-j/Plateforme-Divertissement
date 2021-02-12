PhotosCards = document.querySelectorAll("figure");
console.log(PhotosCards.length);
var Choix = 0;

function Next() {
  if (Choix + 1 > PhotosCards.length - 1) {
    Choix = 0;
  } else {
    Choix += 1;
  }
  if (Choix - 1 == 0) {
    PhotosCards[PhotosCards.length - 1].style.animation = "hide 0.5s forwards";
    PhotosCards[0].style.animation = "after 0.5s forwards";
    PhotosCards[Choix].style.animation = "selected 0.5s forwards";
    PhotosCards[Choix + 1].style.animation = "before 0.5s forwards";
  } else if (Choix == 0) {
    PhotosCards[PhotosCards.length - 2].style.animation = "hide 0.5s forwards";
    PhotosCards[PhotosCards.length - 1].style.animation = "after 0.5s forwards";
    PhotosCards[Choix].style.animation = "selected 0.5s forwards";
    PhotosCards[Choix + 1].style.animation = "before 0.5s forwards";
  } else if (Choix + 1 == PhotosCards.length) {
    PhotosCards[Choix - 2].style.animation = "hide 0.5s forwards";
    PhotosCards[Choix - 1].style.animation = "after 0.5s forwards";
    PhotosCards[Choix].style.animation = "selected 0.5s forwards";
    PhotosCards[0].style.animation = "before 0.5s forwards";
  } else if (Choix == PhotosCards.length - 1) {
    PhotosCards[Choix - 2].style.animation = "hide 0.5s forwards";
    PhotosCards[Choix - 1].style.animation = "after 0.5s forwards";
    PhotosCards[Choix].style.animation = "selected 0.5s forwards";
    PhotosCards[0].style.animation = "before 0.5s forwards";
  } else {
    PhotosCards[Choix - 2].style.animation = "hide 0.5s forwards";
    PhotosCards[Choix - 1].style.animation = "after 0.5s forwards";
    PhotosCards[Choix].style.animation = "selected 0.5s forwards";
    PhotosCards[Choix + 1].style.animation = "before 0.5s forwards";
  }
}
Next();
