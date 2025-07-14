function goToLocation(path) {
  window.location.href = path;
}
window.onload = function () {
  const clickTarget = document.getElementById('back');
  if (clickTarget) {
    clickTarget.style.cursor = 'pointer';
    clickTarget.addEventListener('click', () => {
      goToLocation('/');
    });
  }
};