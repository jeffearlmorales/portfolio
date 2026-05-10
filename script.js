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
