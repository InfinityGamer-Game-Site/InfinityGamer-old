function toggleTheme(theme) {
  const body = document.body;
  body.className = theme;
  localStorage.setItem("theme", theme);
  location.reload();
}
function loadTheme(theme) {
  const body = document.body;
  body.className = theme;
  localStorage.setItem("theme", theme);
}

// Check if theme is saved in local storage
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  loadTheme(savedTheme);
} else {
  // Default to dark theme if no theme is saved
  toggleTheme("dark");
}

document.addEventListener('DOMContentLoaded', function() {
  const savedTitle = localStorage.getItem('title');

  if (savedTitle) {
      changeTitle(savedTitle);
  }
});

function changeTitle(title) {
  document.title = title;
}



document.addEventListener("DOMContentLoaded", function() {
  var storedFont = localStorage.getItem('selectedFont');
  if (storedFont) {
    document.body.style.fontFamily = storedFont;
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.style.fontFamily = storedFont;
    });
    const gameboxes = document.querySelectorAll("game-box");
    gameboxes.forEach(button => {
      gameboxes.style.fontFamily = storedFont;
    });
    const inputs = document.querySelectorAll("input");
    inputs.forEach(button => {
      inputs.style.fontFamily = storedFont;
    });
  }
});

