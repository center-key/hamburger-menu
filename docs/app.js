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
   setupIcons() {
      const getName = (elem) => elem.data().icon || elem.data().brand;
      const makeIcon = (i, elem) => $(elem).addClass('font-icon fa-' + getName($(elem)));
      $('i[data-icon]').addClass('fas').each(makeIcon);
      $('i[data-brand]').addClass('fab').each(makeIcon);
      },
   setup() {
      const makePageRed = () => $('body').css({ backgroundColor: 'pink' });
      window.onerror = makePageRed;
      app.setupIcons();
      const menuItemSelector = 'body.single-page-app nav.hamburger-menu aside ul li span';
      $(window.document).on({ click: app.actionClick }, menuItemSelector);
      },
   };

app.setup();
