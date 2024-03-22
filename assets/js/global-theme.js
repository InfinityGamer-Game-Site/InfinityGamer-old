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

window.addEventListener('load', function() {
  // Add event listener to detect when user tries to leave the page
  window.addEventListener('beforeunload', function(e) {
    // Display confirmation message
    e.returnValue = 'Are you sure you want to leave? Changes you made may not be saved.';
  });
});
