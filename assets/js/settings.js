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

document.getElementById('backupBtn').addEventListener('click', () => {
  const localStorageData = JSON.stringify(localStorage);
  const blob = new Blob([localStorageData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'localStorageBackup.infinitygamersave';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

document.getElementById('restoreBtn').addEventListener('click', () => {
  document.getElementById('restoreFileInput').click();
});

document.getElementById('restoreFileInput').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const data = JSON.parse(e.target.result);
          for (const key in data) {
              localStorage.setItem(key, data[key]);
          }
          alert('LocalStorage restored successfully!');
      };
      reader.readAsText(file);
  }
});
