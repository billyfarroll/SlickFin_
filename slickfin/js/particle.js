document.addEventListener('DOMContentLoaded', function() {
  particleground(document.getElementById('particles'), {
    dotColor: 'rgba(255,255,255,0.35)',
    lineColor: 'rgba(255,255,255,0.35)'
  });
  var intro = document.getElementById('logo-container-div');
  intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);