function goToLocation(path) {
  window.location.href = path;
}
window.onload = function () {
  // Attach click event to the text element
  const clickTarget = document.getElementById('back');
  if (clickTarget) {
    clickTarget.style.cursor = 'pointer'; // Show hand cursor
    clickTarget.addEventListener('click', () => {
      goToLocation('/');
    });
  }
};