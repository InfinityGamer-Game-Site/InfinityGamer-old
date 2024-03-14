document.addEventListener("DOMContentLoaded", function() {
    const gamesWrapper = document.getElementById("games-wrapper");
    const gameNames = ["1", "1v1lol", "1v1space", "8ball-billiards-classic", "10-minutes-till-dawn", "100ng", "2020-game"];

    function toTitleCase(str) {
        return str.replace(/\b\w+/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    gameNames.forEach(function(gameName) {
      const gameImg = `../images/games/${gameName}.png`;
      const gameLink = `files/${gameName}/index.html`;

      const gameBox = document.createElement("div");
      gameBox.classList.add("game-box");
      gameBox.style.backgroundImage = `url('${gameImg}')`;

      const gameText = document.createElement("span");
      gameText.textContent = toTitleCase(gameName.replace(/-/g, ' ')); // Convert to title case and replace dashes with spaces
      gameBox.appendChild(gameText);

      gameBox.addEventListener("click", function() {
        window.location.href = gameLink;
      });

      gamesWrapper.appendChild(gameBox);
    });
});

//Thanks ChatGPT!