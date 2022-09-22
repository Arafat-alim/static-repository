const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

//! Hamberger Toggle
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  //   alert("Helo");
});

//! Menu Select hide functionality
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    // alert("OOPS");
  });
});
