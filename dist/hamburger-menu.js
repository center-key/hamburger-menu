/*! HamburgerMenu ☰ github.com/center-key/hamburger-menu ☰ License: MIT */

var hamburgerMenu = {
   setup: function() {
      $(window.document).on({ click: $.noop });  //workaround for sticky hover on mobile
      var current;
      function isCurrent(i, elem) {
         var linkUrl = new URL($(elem).attr('href'), current.url);
         return linkUrl.pathname.replace(/[/]$/, '') === current.path;
         }
      function autoHighlight() {
         current = {
            url: new URL(window.location.href),
            path: window.location.pathname.replace(/[/]$/, '')
            };
         $('nav.hamburger-menu li >a').filter(isCurrent).first().closest('li').addClass('current');
         }
      if (!$('nav.hamburger-menu aside').hasClass('disable-auto-highlight'))
         autoHighlight();
      }
   };

$(hamburgerMenu.setup);
