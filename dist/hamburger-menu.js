/*! HamburgerMenu ☰ github.com/center-key/hamburger-menu ☰ License: MIT */

var hamburgerMenu = {
   setup: function() {
      $(window.document).on({ click: $.noop });  //workaround for sticky hover on mobile
      var currentUrl = new URL(window.location.href);
      function isCurrent(i, elem) {
         var linkUrl = new URL($(elem).attr('href'), currentUrl);
         return window.location.pathname.endsWith(linkUrl.pathname);
         }
      $('nav.hamburger-menu ul li >a').filter(isCurrent).first().parent().addClass('current');
      }
   };

$(hamburgerMenu.setup);
