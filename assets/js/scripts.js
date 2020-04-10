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


  // navbar
  $(document).on('click', '.navbar-toggler', function () {
    $toggle = $(this);
    if (pk.misc.navbar_menu_visible == 1) {
      $('html').removeClass('nav-open');
      pk.misc.navbar_menu_visible = 0;
      setTimeout(function () {
        $toggle.removeClass('toggled');
        $('#bodyClick').remove();
      }, 550);
    } else {
      setTimeout(function () {
        $toggle.addClass('toggled');
      }, 580);

      div = '<div id="bodyClick"></div>';
      $(div).appendTo("body").click(function () {
        $('html').removeClass('nav-open');
        pk.misc.navbar_menu_visible = 0;
        $('#bodyClick').remove();
        setTimeout(function () {
          $toggle.removeClass('toggled');
        }, 550);
      });

      $('html').addClass('nav-open');
      pk.misc.navbar_menu_visible = 1;
    }
  }); 



  $('.profile-tabs .nav-link').on('click', function(){
    setTimeout(function () {
      bLazy.revalidate();
    }, 100);
  });

})();