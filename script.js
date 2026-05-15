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
