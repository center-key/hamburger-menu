//! HamburgerMenu v0.3.1 ☰ github.com/center-key/hamburger-menu ☰ MIT License

const hamburgerMenu = {
   selectItem: (event) => {
      const item = $(event.target).closest('li');
      item.closest('aside').find('li').removeClass('current');
      item.addClass('current');
      },
   setup: () => {
      $(window.document).on({ click: $.noop });  //workaround for sticky hover on mobile
      const nav = $('nav.hamburger-menu');
      const autoHighlightMultiPage = () => {
         const current = {
            url:  new window.URL(window.location.href),
            path: window.location.pathname.replace(/[/]$/, '')
            };
         const isCurrent = (i, elem) => {
            const linkUrl = new window.URL($(elem).attr('href'), current.url);
            return linkUrl.pathname.replace(/[/]$/, '') === current.path;
            };
         nav.find('li >a').filter(isCurrent).first().closest('li').addClass('current');
         };
      const autoHighlightSinglePageApp = () =>
         nav.find('>aside li').on({ click: hamburgerMenu.selectItem });
      const autoHighlight = () => {
         autoHighlightMultiPage();
         autoHighlightSinglePageApp();
         };
      if (!nav.find('>aside').hasClass('disable-auto-highlight'))
         autoHighlight();
      }
   };

$(hamburgerMenu.setup);
