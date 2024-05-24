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
