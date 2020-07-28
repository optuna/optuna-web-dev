(function () {

  'use strict';

  // load fonts
  function loadFonts(href) {
    let head = document.querySelector('head');
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    head.appendChild(link);
  }
  loadFonts('https://fonts.googleapis.com/css?family=Montserrat:400,300,700|Work+Sans|Material+Icons&display=swap');
  

  // current years
  function setCurrentYears(domElement) {
    let date = new Date();
    return domElement.textContent = date.getFullYear();
  }

  let copyrightYear = document.querySelector('.copyright-year');
  setCurrentYears(copyrightYear);


  // lazy load	
  var bLazy = new Blazy();


  // searchParams
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has('code_example')) {
    let tabName = searchParams.get('code_example');
    // Activate tab specified by GET params.
    $('.nav-tabs a[href="#' + tabName + '"]').tab('show');
  }


  $('.profile-tabs .nav-link').on('click', function(){
    setTimeout(function () {
      bLazy.revalidate();
    }, 100);
  });


  // load twitter widget
  function loadPlatformTwitter() {
    let body = document.querySelector('body');
    let script = document.createElement('script');
    script.async = true;
    script.src = 'https://platform.twitter.com/widgets.js';
    body.appendChild(script);
  }  

  // Add Class to Element when Scrolled into View
  function hasClass(el, cls) {
    if (el.className.match('(?:^|\\s)' + cls + '(?!\\S)')) { return true; }
  }
  function addClass(el, cls) {
    if (!el.className.match('(?:^|\\s)' + cls + '(?!\\S)')) { el.className += ' ' + cls; }
  }
  function delClass(el, cls) {
    el.className = el.className.replace(new RegExp('(?:^|\\s)' + cls + '(?!\\S)'), '');
  }

  function elementFromTop(elem, classToAdd, distanceFromTop, unit) {
    var winY = window.innerHeight || document.documentElement.clientHeight,
      distTop = elem.getBoundingClientRect().top,
      distPercent = Math.round((distTop / winY) * 100),
      distPixels = Math.round(distTop),
      distUnit;
    distUnit = unit == 'percent' ? distPercent : distPixels;
    if (distUnit <= distanceFromTop) {
      if (!hasClass(elem, classToAdd)) { addClass(elem, classToAdd); }
    } else {
      delClass(elem, classToAdd);
    }
  }

  window.addEventListener('scroll', function () {
    elementFromTop(document.querySelector('.news'), 'news--widget-on', 200, 'pixels');
    
    setTimeout(() => { 
      loadPlatformTwitter(); 
    }, 1000);

  }, false);

})();