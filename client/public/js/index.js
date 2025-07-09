function goToLocation(path) {
  window.location.href = path;
}

function checkKeyPress(e) {
  // Handle spacebar press (key code 32)
  if (e.keyCode === 32) {
    e.preventDefault(); // Prevent scroll
    goToLocation('/feed');
  }
}

window.onload = function () {
  // Make body focusable and focused to receive key input
  document.body.setAttribute("tabindex", "0");
  document.body.focus();

  // Attach the key press event
  document.body.addEventListener("keydown", checkKeyPress);
};