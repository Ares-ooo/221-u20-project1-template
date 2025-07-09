
function goToLocation(path) {
  window.location.href = path;
}

function checkKeyPress(e) {
  if (e.keyCode === 32) { // Spacebar
    e.preventDefault(); // Prevent scroll
    goToLocation('http://my.marist.edu');
  }
}

window.onload = function () {
  // Make body focusable and focused to receive key input
  document.body.setAttribute("tabindex", "0");
  document.body.focus();

  // Attach the key press event
  document.body.addEventListener("keydown", checkKeyPress);

  // Also attach click event to the text element
  const clickTarget = document.getElementById('portal_button');
  if (clickTarget) {
    clickTarget.style.cursor = 'pointer'; // show pointer cursor on hover
    clickTarget.addEventListener('click', () => {
      goToLocation('http://my.marist.edu');
    });
  }
};