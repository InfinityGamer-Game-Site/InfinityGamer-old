function toggleTheme(theme) {
    const body = document.body;
    body.className = theme;
    localStorage.setItem('theme', theme);
}

// Check if theme is saved in local storage
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    toggleTheme(savedTheme);
} else {
    // Default to dark theme if no theme is saved
    toggleTheme('dark');
}