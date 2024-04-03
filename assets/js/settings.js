document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');

    if (!titleInput.value.trim()) {
        alert('Please enter a title.');
        return;
    }

    const title = titleInput.value;

    localStorage.setItem('title', title);
});

function applyFont() {
    var selectedFont = document.getElementById("fontSelect").value;
    document.body.style.fontFamily = selectedFont;
    localStorage.setItem('selectedFont', selectedFont);
    location.reload();
}