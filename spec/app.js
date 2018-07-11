/*
HamburgerMenu ☰ A responsive CSS solution
github.com/center-key/hamburger-menu
License: MIT
*/

var app = {
   setup: function() {
      function makeIcon(i, elem) { $(elem).addClass('fa-' + $(elem).data().icon); }
      $('i[data-icon]').addClass('font-icon fas').each(makeIcon);
      // if (/single-page-app/.test(window.location.pathname))
        // $('nav.hamburger-menu aside ul li').on({ click: app.actionClick })
      }
   };

$(app.setup);
