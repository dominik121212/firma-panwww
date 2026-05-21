const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const slider = document.querySelector(".slider");
const afterImg = document.querySelector(".img-after");
const divider = document.querySelector(".divider");

if(slider){
  slider.addEventListener("input", (e) => {
    const value = e.target.value;

    afterImg.style.clipPath = `inset(0 ${100 - value}% 0 0)`;

    if(divider){
      divider.style.left = value + "%";
    }
  });
}

/* PREMIUM SCROLL REVEAL */

const ba = document.querySelector(".ba");

function revealOnScroll(){
  if(!ba) return;

  const rect = ba.getBoundingClientRect();

  if(rect.top < window.innerHeight - 150){
    ba.classList.add("show");
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const cards = document.querySelectorAll(".project-card");

function showCards(){
  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();

    if(rect.top < window.innerHeight - 100){
      setTimeout(() => {
        card.classList.add("show");
      }, i * 150);
    }
  });
}

window.addEventListener("scroll", showCards);
showCards();

/* ===== LIGHTBOX FUNCTION ===== */

document.addEventListener("DOMContentLoaded", () => {

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  const images = document.querySelectorAll(".project-images img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox(){
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox){
      closeLightbox();
    }
  });

  // ESC na klawiaturze (bonus)
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
      closeLightbox();
    }
  });

});