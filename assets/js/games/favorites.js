function saveItemToLocalStorage(item) {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}

document.addEventListener("DOMContentLoaded", function () {
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
});
  