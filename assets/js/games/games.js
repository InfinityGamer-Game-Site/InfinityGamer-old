document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("c");

  const gamesWrapper = document.getElementById("games-wrapper");
  //gameNames and categories are in linked JS file

 

  function toTitleCase(str) {
    return str.replace(/\b\w+/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  if (categoryParam) {
    categories[categoryParam].forEach(function (gameName) {
      const gameImg = `../images/games/${gameName}.png`;
      const gameLink = `display.html?g=${gameName}`;

      const gameBox = document.createElement("div");
      gameBox.classList.add("game-box");
      gameBox.style.backgroundImage = `url('${gameImg}')`;

      const gameText = document.createElement("span");
      gameText.textContent = toTitleCase(gameName.replace(/-/g, " ")); // Convert to title case and replace dashes with spaces
      gameBox.appendChild(gameText);

      gameBox.addEventListener("click", function () {
        window.location.href = gameLink;
      });

      gamesWrapper.appendChild(gameBox);

      document
        .getElementById("searchInput")
        .addEventListener("input", function () {
          const filterValue = this.value.toLowerCase();

          document.querySelectorAll(".game-box").forEach(function (gameBox) {
            const gameText = gameBox.textContent.toLowerCase();
            if (gameText.includes(filterValue)) {
              gameBox.style.display = "block";
            } else {
              gameBox.style.display = "none";
            }
          });
        });
    });
  } else {
    gameNames.forEach(function (gameName) {
      const gameImg = `../assets/images/games/${gameName}.png`;
      const gameLink = `display.html?g=${gameName}`;

      const gameBox = document.createElement("div");
      gameBox.classList.add("game-box");
      gameBox.style.backgroundImage = `url('${gameImg}')`;

      const gameText = document.createElement("span");
      gameText.textContent = toTitleCase(gameName.replace(/-/g, " ")); // Convert to title case and replace dashes with spaces
      gameBox.appendChild(gameText);

      gameBox.addEventListener("click", function () {
        window.location.href = gameLink;
      });

      gamesWrapper.appendChild(gameBox);

      document
        .getElementById("searchInput")
        .addEventListener("input", function () {
          const filterValue = this.value.toLowerCase();

          document.querySelectorAll(".game-box").forEach(function (gameBox) {
            const gameText = gameBox.textContent.toLowerCase();
            if (gameText.includes(filterValue)) {
              gameBox.style.display = "block";
            } else {
              gameBox.style.display = "none";
            }
          });
        });
    });
    let randomIndex = Math.floor(Math.random() * gameNames.length);
let randomGame = gameNames[randomIndex];

    const gameImg = `../assets/images/games/${randomGame}.png`;
      const gameLink = `display.html?g=${randomGame}`;

      const gameBox = document.createElement("div");
      gameBox.classList.add("game-box");
      gameBox.classList.add('random-game');
      gameBox.style.backgroundImage = `url('${gameImg}')`;

      const gameText = document.createElement("span");
      gameText.textContent = toTitleCase(randomGame.replace(/-/g, " ")); // Convert to title case and replace dashes with spaces
      gameBox.appendChild(gameText);

      gameBox.addEventListener("click", function () {
        window.location.href = gameLink;
      });
      document.getElementById("random-game-container").appendChild(gameBox);
  }

  const marginSwitch = document.getElementById('marginSwitch');
  
  // Check the local storage and set the switch accordingly
  if (localStorage.getItem('compact') === 'true') {
    marginSwitch.checked = true;
    toggleMargin();
  } else {
    marginSwitch.checked = false;
    
  }

  // Toggle margin function
  function toggleMargin() {
    const gameBoxes = document.querySelectorAll('.game-box');
    gameBoxes.forEach(box => {
      if (marginSwitch.checked) {
        box.classList.add('compact');
        localStorage.setItem('compact', true);
      } else {
        box.classList.remove('compact');
        localStorage.setItem('compact', false);
      }
    });
  }

  // Add event listener for the switch
  marginSwitch.addEventListener('change', toggleMargin);

});
