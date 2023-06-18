/*
HamburgerMenu ☰ A responsive CSS solution
github.com/center-key/hamburger-menu
License: MIT
*/

const app = {
   pulse(elem, text) {
      elem.style.opacity =    '0';
      elem.style.transition = 'all 0ms';
      if (text !== undefined)
         elem.textContent = text;
      const animate = () => {
         elem.style.opacity = '1';
         elem.style.transition = 'all 500ms';
         };
      globalThis.requestAnimationFrame(animate);
      },
   actionClick(event) {
      const menuItemSelector = 'body.single-page-app nav.hamburger-menu aside ul li span';
      const elem = event.target.closest(menuItemSelector);
      const displayTitle = () => {
         const title =  elem.closest('li').querySelector('span').textContent;
         const header = globalThis.document.querySelector('main >h1');
         app.pulse(header, title);
         };
      if (elem)
         displayTitle();
      },
   makeIcons(type, selector, addClass) {
      const iconify = (elem) => {
         elem.classList.add('font-icon');
         elem.classList.add(addClass);
         elem.classList.add('fa-' + elem.dataset[type]);
         };
      globalThis.document.querySelectorAll(selector).forEach(iconify);
      },
   setup() {
      app.makeIcons('icon',  'i[data-icon]',  'fas');
      app.makeIcons('brand', 'i[data-brand]', 'fab');
      globalThis.document.addEventListener('click', app.actionClick);
      },
   };

hamburgerMenu.dom.onReady(app.setup);
