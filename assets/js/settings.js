document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const faviconInput = document.getElementById('favicon');
    const titleInput = document.getElementById('title');

    if (faviconInput.files.length === 0 || !titleInput.value.trim()) {
        alert('Please upload a favicon and enter a title.');
        return;
    }

    const faviconFile = faviconInput.files[0];
    const title = titleInput.value;

    const reader = new FileReader();
    reader.onload = function(event) {
        const faviconUrl = event.target.result;

        saveSettingsToLocalStorage(faviconUrl, title);
    }
    reader.readAsDataURL(faviconFile);
});

function saveSettingsToLocalStorage(faviconUrl, title) {
    localStorage.setItem('faviconUrl', faviconUrl);
    localStorage.setItem('title', title);
}