// JavaScript code to extract the search parameter from the URL and set the iframe source
const urlParams = new URLSearchParams(window.location.search);
const searchParam = urlParams.get("g");

if (searchParam) {
  let title = toTitleCase(searchParam.replace(/-/g, " "));
  document.getElementById("gameFrame").src = "files/" + searchParam + "/index.html";
  document.getElementById("gameName").textContent = title;
  document.getElementById("fullscreenButton").href = "files/" + searchParam + "/index.html";
  document.getElementById("sourceButton").href = "https://github.com/InfinityGamer-Game-Site/InfinityGamer/tree/main/games/files/" + searchParam;
  const savedTitle = localStorage.getItem("title");

  if (savedTitle) {
    document.title = savedTitle;
  } else {
    document.title = title + " - InfinityGamer";
  }

  if (fullscreenNeeded.includes(searchParam)){
    const popup = document.createElement('pop-up');
    popup.textContent = 'This game needs fullscreen to work! Redirecting you to fullscreen...';
    const goNowButton = document.createElement('button');
    goNowButton.textContent = "Go now";
    goNowButton.onclick = "window.location.href = files/" + searchParam + "/index.html"
    document.body.appendChild(popup);
    popup.appendChild(document.createElement('br'));
    popup.appendChild(document.createElement('br'));
    popup.appendChild(goNowButton);
    setTimeout(function() {
      window.location.href = "files/" + searchParam + "/index.html";
  }, 5000);
  }
}

function toTitleCase(str) {
  return str.replace(/\b\w+/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

var iframe = document.getElementById('gameFrame');

// Function to reload the iframe
function reloadIframe() {
    iframe.contentWindow.location.reload(true); // Reload the iframe's content
}

// Example of triggering the reload on a button click
var reloadButton = document.getElementById('reloadButton');
reloadButton.addEventListener('click', reloadIframe);
