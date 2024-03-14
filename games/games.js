document.addEventListener("DOMContentLoaded", function() {
    const gamesWrapper = document.getElementById("games-wrapper");
    const gameNames = ["1", "1v1lol", "1v1space", "8ball-billiards-classic", "10-minutes-till-dawn"];
  
    gameNames.forEach(function(gameName) {
      const gameImg = `../images/games/${gameName}.png`;
      const gameLink = `/${gameName}/index.html`;
  
      const gameBox = document.createElement("div");
      gameBox.classList.add("game-box");
      gameBox.style.backgroundImage = `url('${gameImg}')`;
      gameBox.addEventListener("click", function() {
        window.location.href = gameLink;
      });
  
      gamesWrapper.appendChild(gameBox);
    });
  });  