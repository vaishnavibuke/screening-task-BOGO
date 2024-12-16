// Selecting all radio buttons and articles
const radioButtons = document.querySelectorAll('input[name="unit"]');
const articles = document.querySelectorAll("article");

// Function to handle the visibility toggle
function handleSelection(selectedId) {
  articles.forEach((article) => {
    const isActive = article.querySelector(`#${selectedId}`) !== null;
    article.classList.toggle("active", isActive);
    const table = article.querySelector("table");
    if (table) {
      table.classList.toggle("selected", isActive);
    }
  });
}

// Added event listener to each radio button
radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => handleSelection(radio.id));
});
