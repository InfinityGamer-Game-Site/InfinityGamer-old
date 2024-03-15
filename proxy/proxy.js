var websites = [];
var currentIndex = 0;
var iframe = document.getElementById('website-iframe');
var rowDisplay = document.getElementById('row-display');

fetch('proxies.txt')
.then(response => response.text())
.then(data => {
    websites = data.trim().split('\n');
    loadWebsite(currentIndex);
    updateRowDisplay();
});

function loadWebsite(index) {
    if (index >= 0 && index < websites.length) {
        iframe.src = websites[index];
        currentIndex = index;
        updateRowDisplay();
    }
}

function nextWebsite() {
    currentIndex = (currentIndex + 1) % websites.length;
    loadWebsite(currentIndex);
}

function prevWebsite() {
    currentIndex = (currentIndex - 1 + websites.length) % websites.length;
    loadWebsite(currentIndex);
}

function updateRowDisplay() {
    var currentRow = currentIndex + 1;
    var totalRows = websites.length;
    rowDisplay.textContent = "Proxy " + currentRow + " of " + totalRows + " - If a proxy is blocked, click next.";
}

//Created by ChatGPT
