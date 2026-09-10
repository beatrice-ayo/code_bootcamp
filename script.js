// Naija to UK — small progressive-enhancement script
// No frameworks, no build step: everything here is plain JS.

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile menu after choosing a link
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Waitlist form (front-end only — swap the console.log for a real
  // request to your backend or email service when you have one)
  const form = document.getElementById("joinForm");
  const message = document.getElementById("joinMessage");
  const emailInput = document.getElementById("email");

  if (form && message && emailInput) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!isValid) {
        message.textContent = "That email doesn't look quite right — mind checking it?";
        message.className = "join-message error";
        emailInput.focus();
        return;
      }

      // Placeholder for real signup logic.
      console.log("Waitlist signup:", email);

      message.textContent = "Thanks — we'll email you the moment Naija to UK is live!";
      message.className = "join-message success";
      form.reset();
    });
  }
});
