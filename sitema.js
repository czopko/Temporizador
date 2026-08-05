document.addEventListener('DOMContentLoaded', function () {
  calctempo();
  initConfigControls();
});

var date,
    newYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime(),
    starttempor = '';

function initConfigControls() {
  var fontSelect = document.getElementById('font-family');
  var sizeInput = document.getElementById('font-size');
  var layoutSelect = document.getElementById('layout');
  var container = document.getElementById('contador');
  var toggleButton = document.getElementById('config-toggle');
  var panel = document.getElementById('config-panel');

  function aplicarConfiguracao() {
    document.documentElement.style.setProperty('--font-family', fontSelect.value);
    document.documentElement.style.setProperty('--font-size', sizeInput.value + 'px');

    container.classList.remove('layout-horizontal', 'layout-vertical');
    container.classList.add('layout-' + layoutSelect.value);
  }

  toggleButton.addEventListener('click', function () {
    panel.classList.toggle('open');
  });

  fontSelect.addEventListener('change', aplicarConfiguracao);
  sizeInput.addEventListener('input', aplicarConfiguracao);
  layoutSelect.addEventListener('change', aplicarConfiguracao);

  aplicarConfiguracao();
}

function calctempo(dates) {
  clearInterval(starttempor);

  if (typeof dates === 'undefined') {
    date = newYear;
  } else {
    date = new Date(dates).getTime();
  }

  function updatetempor(targetDate) {
    var now = new Date().getTime();
    var distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(starttempor);
      document.querySelector('.relogio-dia').innerHTML = 'F';
      document.querySelector('.relogio-horas').innerHTML = 'I';
      document.querySelector('.relogio-minutos').innerHTML = 'M';
      document.querySelector('.relogio-segundos').innerHTML = '!';
      return;
    }

    var dias = Math.floor(distance / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.relogio-dia').innerHTML = dias;
    document.querySelector('.relogio-horas').innerHTML = horas;
    document.querySelector('.relogio-minutos').innerHTML = minutos;
    document.querySelector('.relogio-segundos').innerHTML = segundos;
  }

  updatetempor(date);
  starttempor = setInterval(function () {
    updatetempor(date);
  }, 1000);
}
