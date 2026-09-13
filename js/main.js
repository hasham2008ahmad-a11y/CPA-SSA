(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Mobile nav toggle */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    Array.prototype.forEach.call(nav.querySelectorAll('a'), function (link) {
      link.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (!document.body.classList.contains('nav-open')) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  /* Sticky header shadow on scroll */
  var header = document.querySelector('.site-header');
  function onHeaderScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  onHeaderScroll();
  window.addEventListener('scroll', onHeaderScroll, { passive: true });

  /* Back-to-top button */
  var toTop = document.querySelector('.to-top');
  if (toTop) {
    function onTopScroll() {
      toTop.classList.toggle('is-visible', window.scrollY > 480);
    }
    onTopScroll();
    window.addEventListener('scroll', onTopScroll, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* Scroll-triggered reveal animations */
  var revealEls = document.querySelectorAll('.reveal, .reveal-group');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(revealEls, function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    Array.prototype.forEach.call(revealEls, function (el) { revealObserver.observe(el); });
  }

  /* Scroll-spy for Membership / Resources sidebars */
  var spySections = document.querySelectorAll('[data-spy-section]');
  var spyLinks = document.querySelectorAll('[data-spy-link]');
  if (spySections.length && spyLinks.length && 'IntersectionObserver' in window) {
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.getAttribute('id');
        var link = document.querySelector('[data-spy-link="' + id + '"]');
        if (!link || !entry.isIntersecting) return;
        Array.prototype.forEach.call(spyLinks, function (l) { l.classList.remove('is-active'); });
        link.classList.add('is-active');
      });
    }, { rootMargin: '-35% 0px -50% 0px', threshold: 0 });
    Array.prototype.forEach.call(spySections, function (s) { spyObserver.observe(s); });
  }

  /* Subtle hero parallax */
  var parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length && !reduceMotion) {
    var ticking = false;
    function updateParallax() {
      Array.prototype.forEach.call(parallaxEls, function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.12;
        var rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        var offset = rect.top * speed;
        el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
    updateParallax();
  }

  /* Current year in footer, if present */
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
