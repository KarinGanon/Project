"use strict";

let firstIndex = 0;

function automaticSlide() {
  setTimeout(automaticSlide, 2000);

  let pics;
  const img = document.querySelectorAll(".image");

  for (pics = 0; pics < img.length; pics++) {
    img[pics].style.display = "none";
  }

  firstIndex++;

  if (firstIndex >= img.length) {
    firstIndex = 0;
  }

  img[firstIndex].style.display = "block";
}

automaticSlide();
