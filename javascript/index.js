"use strict";
const contactButton = document.querySelector(".contact-button");

function handleClick() {
  console.log("Clikced");

  const contactForm = document.querySelector(".contact-form");

  contactForm.classList.remove("hidden");
  setTimeout(() => {
    console.log("Delayed for 1 second.");
    contactForm.style.opacity = "1";
    // contactForm.style.transform = "translateY(20px)";
  }, "1");

  // contactForm.textContent = "Hi";
  // document.querySelector(".contact-form").style.display = "grid";
}

contactButton.addEventListener("click", handleClick);
