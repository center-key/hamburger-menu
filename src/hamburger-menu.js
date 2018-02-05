var hamburgerMenu = {
   selectItem: function(event) {
      var item = $(event.target).closest('li');
      item.closest('aside').find('li').removeClass('current');
      item.addClass('current');
      },
   setup: function() {
      $(window.document).on({ click: $.noop });  //workaround for sticky hover on mobile
      var nav = $('nav.hamburger-menu');
      function autoHighlightMultiPage() {
         var current = {
            url: new URL(window.location.href),
            path: window.location.pathname.replace(/[/]$/, '')
            };
         function isCurrent(i, elem) {
            var linkUrl = new URL($(elem).attr('href'), current.url);
            return linkUrl.pathname.replace(/[/]$/, '') === current.path;
            }
         nav.find('li >a').filter(isCurrent).first().closest('li').addClass('current');
         }
      function autoHighlightSinglePageApp() {
         nav.find('>aside li').on({ click: hamburgerMenu.selectItem });
         }
      function autoHighlight() {
         autoHighlightMultiPage();
         autoHighlightSinglePageApp();
         }
      if (!nav.find('>aside').hasClass('disable-auto-highlight'))
         autoHighlight();
      }
   };

$(hamburgerMenu.setup);
