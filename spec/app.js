/*
HamburgerMenu ☰ A responsive CSS solution
github.com/center-key/hamburger-menu
License: MIT
*/

const app = {
   setupIcons: function() {
      function getName(elem) { return elem.data().icon || elem.data().brand; }
      function makeIcon(i, elem) { $(elem).addClass('font-icon fa-' + getName($(elem))); }
      $('i[data-icon]').addClass( 'fas').each(makeIcon);
      $('i[data-brand]').addClass('fab').each(makeIcon);
      },
   setup: function() {
      app.setupIcons();
      }
   };

app.setup();
