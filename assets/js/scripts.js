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
  //loadFonts('https://use.fontawesome.com/releases/v5.3.1/css/all.css');


  // current years
  function setCurrentYears(domElement) {
    let date = new Date();
    return domElement.textContent = date.getFullYear();
  }

  let copyrightYear = document.querySelector('.copyright-year');
  setCurrentYears(copyrightYear);


  // lazy load	
  var bLazy = new Blazy({
    // Options
    offset: 100
  });


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

})();