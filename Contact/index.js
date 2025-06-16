document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";

  setTimeout(() => {
    status.textContent = "Message sent successfully!";
    this.reset();
  }, 1500);
});
