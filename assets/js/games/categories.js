document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        const category = button.dataset.category;
        // Construct background image path based on category
        const imagePath = `../assets/images/categories/${category}.png`;
        // Set button background image
        button.style.backgroundImage = `url('${imagePath}')`;
        // Add onclick event listener to redirect when clicked
        const catText = document.createElement("span");
        catText.textContent = toTitleCase(category.replace(/-/g, " ")); // Convert to title case and replace dashes with spaces
        button.appendChild(catText);
        button.addEventListener('click', function() {
            window.location.href = `index.html?c=${category}`;
        });
    });
});
function toTitleCase(str) {
    return str.replace(/\b\w+/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }