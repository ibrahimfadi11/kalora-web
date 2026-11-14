(function () {
  var top = document.querySelector('header.top');
  if (!top) return;
  function f() { top.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', f, { passive: true }); f();
})();
