document.addEventListener("DOMContentLoaded", function() {
    const gamesWrapper = document.getElementById("games-wrapper");
    const gameNames = ["1", "1v1lol", "8ball-billiards-classic", "10-minutes-till-dawn", "100ng", "2020-game", "2048", "2048-multitask", "9007199254740992", "a-dark-room", "achievement-unlocked", "adrenaline-challenge", "age-of-war", "alien-hominid", "alien-invaders-io", "align-4", "among-us", "angry-birds", "anti-terrorist-rush", "arcade-wizard", "ascii-space", "aspiring-artist", "asteroids"];

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

//Created by ChatGPT