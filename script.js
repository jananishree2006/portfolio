// Smooth scroll behavior
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Simple form submission alert
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for your message!");
  this.reset();
});
function toggleDetails(button) {
  const detailsDiv = button.nextElementSibling;
  
  if (detailsDiv.style.display === "block") {
    detailsDiv.style.display = "none";
    button.textContent = "View Details";
  } else {
    detailsDiv.style.display = "block";
    button.textContent = "Hide Details";
  }
}
