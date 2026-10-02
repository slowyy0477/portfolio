/* ==========================================================================
   motion.js — the site's extra motion layer.

   Lives beside script.js, which owns the scroll-reveal system
   (html.js [data-anim] → [data-anim].is-in) and the ticker. This file only
   ADDS motion; it never hides content and never re-implements a reveal.

   Rules it obeys, because the machine is an Intel HD 615:
     - transform and opacity only, never width/height/top/left
     - one rAF loop, and it stops itself when nothing is on screen
     - prefers-reduced-motion switches the whole file off
     - pointer effects only on devices that actually have a pointer
   ========================================================================== */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  /* ---------------------------------------------------------------- helpers */
  var points = [];          // scroll-linked layers: { el, factor, axis }
  var running = false;

  function add(el, factor, axis) { points.push({ el: el, factor: factor, axis: axis }); }

  function apply() {
    running = false;
    var vh = window.innerHeight;

    points.forEach(function (p) {
      var r = p.el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;         // off-screen: leave it alone
      var progress = (r.top + r.height / 2 - vh / 2) / vh;      // -0.5 … +0.5 around centre
      var shift = progress * p.factor * 100;
      if (p.axis === 'y') p.el.style.transform = 'translate3d(0,' + shift.toFixed(2) + 'px,0)';
    });
  }

  function onScroll() {
    if (running) return;
    running = true;
    requestAnimationFrame(apply);
  }

  /* ------------------------------------------------- 1. hero name, by letter */
  function letterRise() {
    var name = document.getElementById('hero-name');
    if (!name || name.dataset.motionDone) return;
    name.dataset.motionDone = '1';

    /* Wrap each word in a mask, each letter in a span. The h1 keeps its own
       reveal transform, so we only start once it is actually revealed. */
    var text = name.textContent.trim();
    if (!text) return;
    name.setAttribute('aria-label', text);
    name.textContent = '';

    var i = 0;
    text.split(/(\s+)/).forEach(function (chunk) {
      if (/^\s+$/.test(chunk)) { name.appendChild(document.createTextNode(' ')); return; }
      var word = document.createElement('span');
      word.className = 'mw';
      word.setAttribute('aria-hidden', 'true');
      Array.prototype.forEach.call(chunk, function (chr) {
        var s = document.createElement('span');
        s.className = 'ml';
        s.textContent = chr;
        s.style.transitionDelay = (i * 26) + 'ms';
        i++;
        word.appendChild(s);
      });
      name.appendChild(word);
    });

    var start = function () { name.classList.add('letters-in'); };
    if (name.classList.contains('is-in')) start();
    else new MutationObserver(function (_m, obs) {
      if (name.classList.contains('is-in')) { start(); obs.disconnect(); }
    }).observe(name, { attributes: true, attributeFilter: ['class'] });
  }

  /* ------------------------------------------------------ 2. magnetic buttons */
  function magnetise() {
    var fine = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('pointermove', function (e) {
        var r = btn.getBoundingClientRect();
        var dx = (e.clientX - (r.left + r.width / 2)) * 0.14;
        var dy = (e.clientY - (r.top + r.height / 2)) * 0.22;
        btn.style.transform = 'translate3d(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px,0)';
      });
      btn.addEventListener('pointerleave', function () {
        btn.style.transform = '';
      });
    });
  }

  /* ------------------------------------------------------------------- boot */
  function boot() {
    letterRise();
    magnetise();

    var glow = document.querySelector('.hero__glow');
    if (glow) add(glow, 0.30, 'y');                 // decorative, safe to move
    if (points.length) {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      apply();
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
