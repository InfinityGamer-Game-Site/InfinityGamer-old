// JavaScript code to extract the search parameter from the URL and set the iframe source
const urlParams = new URLSearchParams(window.location.search);
const searchParam = urlParams.get("g");

if (searchParam) {
  let title = toTitleCase(searchParam.replace(/-/g, " "));
  document.getElementById("gameFrame").src = "files/" + searchParam + "/index.html";
  document.getElementById("gameName").textContent = title;
  document.getElementById("fullscreenButton").href = "files/" + searchParam + "/index.html";
  document.getElementById("sourceButton").href = "https://github.com/InfinityGamer-Game-Site/InfinityGamer/tree/main/games/files/" + searchParam;
  document.title = title + " - InfinityGamer";

}

function toTitleCase(str) {
  return str.replace(/\b\w+/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
