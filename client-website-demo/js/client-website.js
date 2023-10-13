// Theme switcher selection
const checkbox = document.querySelector("#checkbox");

// Theme switcher functionality
checkbox.addEventListener("change", () => {
    // Toggle website theme
    document.body.classList.toggle("dark");
  });