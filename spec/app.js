/*
HamburgerMenu ☰ A responsive CSS solution
github.com/center-key/hamburger-menu
License: MIT
*/

const app = {
   actionClick(event) {
      const title = $(event.target).closest('li').find('span').first().text();
      $('main >h1').hide().text(title).fadeIn();
      },
   setupIcons: function() {
      function getName(elem) { return elem.data().icon || elem.data().brand; }
      function makeIcon(i, elem) { $(elem).addClass('font-icon fa-' + getName($(elem))); }
      $('i[data-icon]').addClass( 'fas').each(makeIcon);
      $('i[data-brand]').addClass('fab').each(makeIcon);
      },
   setup: function() {
      const makePageRed = () => $('body').css({ backgroundColor: 'pink' });
      window.onerror = makePageRed;
      app.setupIcons();
      if (/single-page-app/.test(window.location.pathname))
        $('nav.hamburger-menu aside ul li').on({ click: app.actionClick });
      }
   };

app.setup();
