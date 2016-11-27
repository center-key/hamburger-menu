////////////////////////////////////////////////
// Hamburger Menu ☰ A responsive CSS solution //
// github.com/center-key/hamburger-menu       //
// MIT or WTFPL (your choice)                 //
////////////////////////////////////////////////

// To automatically set the current state, add the "data-menu" attribute to each <li> tag
// in the Hamburger Menu and to the <main> tag.

var hamburgerMenu = {
   setup: function() {
      $(window.document).on({ click: $.noop });  //workaround for sticky hover on mobile
      var menuItem = $('main').data().menu;  //use "data-menu" attribute to set current menu item
      $('nav.hamburger-menu li[data-menu=' + menuItem + ']').addClass('current');
      }
   };

$(hamburgerMenu.setup);
