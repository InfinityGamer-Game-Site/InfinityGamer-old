
let color1custom = "#000000";
let color2custom = "#FFFFFF";
let color3custom = "#AAAAAA";

  const body = document.querySelector("body");
  const styles = window.getComputedStyle(body);
  color1custom = styles.getPropertyValue("--bg-color-" + savedTheme);
  color2custom = styles.getPropertyValue("--link-color-" + savedTheme);
  color3custom = styles.getPropertyValue("--text-color-" + savedTheme);

  // Get the clock element
  const mainClock = document.getElementById("main-clock");

  // Function to update the clock time
  function updateClock() {
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();

    // Update the clock text content
    mainClock.textContent = currentTime;
  }
  setInterval(updateClock, 100);
