// 1. ENTRANCE: Staggered "Assembly"
window.addEventListener("DOMContentLoaded", () => {
  const timeline = anime.timeline({
    easing: "easeOutExpo",
    duration: 1000,
  });

  timeline
    .add({
      targets: "header",
      translateY: [-50, 0],
      opacity: [0, 1],
    })
    .add(
      {
        targets: "section > *",
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100), // Elements pop up one by one
      },
      "-=600",
    ); // Starts slightly before header finishes
});

// 2. EXIT: The "Dissolve"
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const destination = this.getAttribute("href");

    if (
      destination &&
      destination.includes(".html") &&
      !destination.startsWith("#")
    ) {
      e.preventDefault();

      // Close menu if open
      const navbar = document.querySelector(".navbar");
      if (navbar) navbar.classList.remove("active");

      anime({
        targets: "body > *",
        opacity: [1, 0],
        scale: 0.98, // Slight shrink
        duration: 400,
        easing: "easeInQuad",
        complete: () => {
          window.location.href = destination;
        },
      });
    }
  });
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // Changes icon to an 'X'
  navbar.classList.toggle("active"); // Shows/hides the menu
};

// Bonus: This closes the menu automatically when you click a link or scroll
window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("enlargedImg");
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("click", function (e) {
    // If the user clicked the 'Review Certificate' button, don't open the popup
    if (e.target.classList.contains("btn")) {
      return;
    }

    // Otherwise, find the image inside THIS card and show it
    const img = this.querySelector("img");
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Close logic
document.querySelector(".close").onclick = () => (modal.style.display = "none");

window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};
