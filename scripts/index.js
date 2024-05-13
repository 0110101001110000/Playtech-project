

/* Init -------------------------------------------------------------------- */


/* Smooth Scroll Functionality ----- */

// Get elements
const portifolios_ancor = document.getElementById("portifolios-ancor");
const prices_ancor = document.getElementById("plans-ancor");
const about_ancor = document.getElementById("about-ancor");
const portifolios_section = document.getElementById("portifolios");
const prices_section = document.getElementById("prices");
const about_section = document.getElementById("about");

// Scroll Function
function scrollToElementCenter(button, element) {
  button.addEventListener("click", (event) => {
    
    // Get position and sizes values
    const window_height = parseInt(window.innerHeight);
    const element_rect = element.getBoundingClientRect();
    const element_y = parseInt(element_rect.y);
    const element_height = parseInt(element_rect.height);
    
    // Set coordinate "y" to scroll
    const coord_y = element_y - ((window_height - element_height) / 2);  

    // Scroll to coordinate
    if (window_height > element_height) {
      window.scroll({
        top: coord_y,
        behavior: "smooth"
      });
    } else {
      window.scroll({
        top: (element_y - 10),
        behavior: "smooth"
      });
    }  
  });
}

// Smooth Scroll to Portifolios Section
scrollToElementCenter(portifolios_ancor, portifolios_section);

// Smooth Scroll to Prices Section
scrollToElementCenter(prices_ancor, prices_section);

// Smooth Scroll to Prices Section
scrollToElementCenter(about_ancor, about_section);


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