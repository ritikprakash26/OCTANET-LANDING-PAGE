// Smooth scroll to features section
function scrollToFeatures() {
  const section = document.getElementById("features");
  if (section && typeof section.scrollIntoView === "function") {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
  }
}

// Toggle mobile navigation menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Dynamic greeting based on time
function setGreeting() {
  const greetingEl = document.getElementById("greeting");
  const hour = new Date().getHours();
  let greeting = "Welcome!";

  if (hour < 12) greeting = "Good Morning!";
  else if (hour < 18) greeting = "Good Afternoon!";
  else greeting = "Good Evening!";

  greetingEl.textContent = greeting;
}
setGreeting();
