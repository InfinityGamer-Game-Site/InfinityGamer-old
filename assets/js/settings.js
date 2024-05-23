document.getElementById('title-changer').addEventListener('submit', function(event) {
    event.preventDefault();

    const titleInput = document.getElementById('title');

    if (!titleInput.value.trim()) {
        alert('Please enter a title.');
        return;
    }

    const title = titleInput.value;

    localStorage.setItem('title', title);
});

document.getElementById('redirect-changer').addEventListener('submit', function(event) {
    event.preventDefault();

    const redirectURLInput = document.getElementById('redir-url');

    if (!redirectURLInput.value.trim()) {
        alert('Please enter a URL.');
        return;
    }

    const redirectURL = redirectURLInput.value;

    localStorage.setItem('redirectURL', 'https://' + redirectURL);
});

function applyFont(fontName) {
    document.body.style.fontFamily = fontName;
    localStorage.setItem('selectedFont', fontName);
    location.reload(); // Reload the page to apply the font imediately
}




function toggleAutoAboutBlankEmbedder() {
  const itemName = 'autoAboutBlankEmbed';

  // Retrieve the current value from localStorage
  let currentValue = localStorage.getItem(itemName);

  // Check the current value and toggle it
  if (currentValue === null) {
    // If the item is not set, initialize it to true
    localStorage.setItem(itemName, 'true');
  } else if (currentValue === 'true') {
    // If the item is true, set it to false
    localStorage.setItem(itemName, 'false');
  } else {
    // If the item is false, set it to true
    localStorage.setItem(itemName, 'true');
  }
}

if (localStorage.getItem('autoAboutBlankEmbed') === 'true') {
  document.getElementById('aabeSwitch').checked = true;
  toggleMargin();
} else {
  document.getElementById('aabeSwitch').checked = false;
}
