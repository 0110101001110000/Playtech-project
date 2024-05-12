

/* Init -------------------------------------------------------------------- */


/* Slider Functionality ------------ */

// Get elements
const slides_container = document.querySelector("#slides-container");
const slide = document.querySelector(".slide");
const prev_button = document.getElementById("slide-arrow-prev");
const next_button = document.getElementById("slide-arrow-next");

// Display the next slide
next_button.addEventListener("click", (event) => {
  const slide_width = slide.clientWidth;
  slides_container.scrollLeft += slide_width;
});

// Display the previous slide
prev_button.addEventListener("click", (event) => {
  const slide_width = slide.clientWidth;
  slides_container.scrollLeft -= slide_width;
});

window.addEventListener("resize", (event) => {
  const slide_width = slide.clientWidth;
  slides_container.scrollLeft -= (slide_width * 3);
});