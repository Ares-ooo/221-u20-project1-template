function goToLocation(path) {
  window.location.href = path;
}
window.onload = function () {
  document.body.setAttribute("tabindex", "0");
  document.body.focus();
  const clickTarget = document.getElementById('portal_button');
  if (clickTarget) {
    clickTarget.style.cursor = 'pointer';
    clickTarget.addEventListener('click', () => {
      goToLocation('https://gachiakuta.fandom.com/wiki/Gachiakuta_Wiki');
    });
  }
};