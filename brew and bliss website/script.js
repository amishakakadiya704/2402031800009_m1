// Select the hamburger icon and the navigation links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Add a click event listener to toggle the mobile menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close the mobile menu automatically when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});
