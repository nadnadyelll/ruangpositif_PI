// FUNCTION SMOOTH SCROLL
function scrollToElement(elementSelector) {
  let element = document.querySelector(elementSelector);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// VARIABEL UNTUK MENGAMBIL ID
let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");
let link5 = document.getElementById("link5");


// FITUR SCROLL ELEMENT
link1.addEventListener("click", () => {
  scrollToElement(".hero1");
});

link2.addEventListener("click", () => {
  scrollToElement(".hero2");
});

link3.addEventListener("click", () => {
  scrollToElement(".hero3");
});

link4.addEventListener("click", () => {
  scrollToElement(".hero4");
});

link5.addEventListener("click", () => {
  scrollToElement(".hero5");
});

