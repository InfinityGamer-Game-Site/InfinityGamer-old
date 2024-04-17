const mainClock = document.getElementById("time");

  // Function to update the clock time
function updateClock() {
    let currentDate = new Date();
    let currentTime = currentDate.toLocaleTimeString();

    // Update the clock text content
    mainClock.textContent = currentTime;
}


  // Call the updateClock function every second (1000 milliseconds)
setInterval(updateClock, 100);

function redirect(link){
  if (window.top.location.href !== "about:blank"){
    window.top.location.href = link;
  } else {
    window.parent.location.href = link;
  }
}