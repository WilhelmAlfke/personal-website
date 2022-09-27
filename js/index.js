console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

console.log(darkButton);
console.log(toggleButton);
