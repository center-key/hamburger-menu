// HamburgerMenu ☰ MIT License

const hamburgerMenu = {
   // <nav class=hamburger-menu>
   //    <a class=hamburger href=#>&#9776;</a>
   //    <aside>
   //       <ul>
   //          <li><a href=.>Home</a></li>
   //          <li><a href=page1.html>Page 1</a></li>
   //          <li><a href=page2.html>Page 2</a></li>
   //          <li><a href=page3.html>Page 3</a></li>
   //       </ul>
   //    </aside>
   // </nav>

   version: '{{package.version}}',

   selectItem(elem) {
      const menuItem = elem.closest('li');
      const navMenu =  menuItem.closest('.hamburger-menu');
      const reset =    (elem) => elem.classList.remove('current');
      menuItem.closest('aside').querySelectorAll('li').forEach(reset);
      menuItem.classList.add('current');
      navMenu.classList.add('collapse-menu');
      navMenu.dataset.menuCollapsed = String(Date.now());
      const restoreAllowExand = () => {
         navMenu.classList.remove('collapse-menu');
         globalThis.document.removeEventListener('click',     restoreAllowExand);
         globalThis.document.removeEventListener('mousemove',  restoreAllowExand);
         };
      const listen = () => {
         globalThis.document.addEventListener('click',     restoreAllowExand);
         globalThis.document.addEventListener('mousemove', restoreAllowExand);
         };
      const afterCurrentClick = 100;
      globalThis.setTimeout(listen, afterCurrentClick);
      },

   setup() {
      globalThis.document.addEventListener('click', () => {});  //workaround for sticky hover on mobile
      const navMenu = globalThis.document.querySelector('.hamburger-menu');
      const aside =   navMenu?.querySelector('aside');
      const autoHighlightMultiPage = () => {
         const currentUrl =  new globalThis.URL(globalThis.location.href);
         const currentPath = globalThis.location.pathname.replace(/\/$/, '');
         const setCurrent = (elem) => {
            const linkUrl = new globalThis.URL(elem.href, currentUrl);
            const isCurrent = linkUrl.pathname.replace(/\/$/, '') === currentPath;
            elem.parentElement.classList.add(isCurrent ? 'current' : 'other-page');
            };
         navMenu.querySelectorAll('li >a').forEach(setCurrent);
         };
      const delegateSelectItem = (event) => {
         const elem = event.target.closest('.hamburger-menu li');
         if (elem)
            hamburgerMenu.selectItem(elem);
         };
      const autoHighlightSinglePageApp = () =>
         globalThis.document.addEventListener('click', delegateSelectItem);
      const autoHighlight = () => {
         autoHighlightMultiPage();
         autoHighlightSinglePageApp();
         };
      if (aside && !aside.classList.contains('disable-auto-highlight'))
         autoHighlight();
      },

   dom: {
      onReady(callback) {
         // Calls the specified function once the web page is loaded and ready.
         // Example (execute myApp.setup() as soon as the DOM is interactive):
         //    hamburgerMenu.dom.onReady(myApp.setup);
         if (globalThis.document.readyState === 'complete')
            callback();
         else
            globalThis.window.addEventListener('DOMContentLoaded', callback);
         },
      },

   };

hamburgerMenu.dom.onReady(hamburgerMenu.setup);
