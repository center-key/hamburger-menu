// Hamburger Menu
// A responsive CSS solution

$(document).on({ click: $.noop });  //workaround for sticky hover on mobile

// To automatically set the current state, add the "data-menu" attribute to each <li> tag
// in the Hamburger Menu and to the <main> tag.
function setCurrentHamburgerMenuItem() {
   var menuItem = $('main').data().menu;
   $('nav.hamburger-menu li[data-menu=' + menuItem + ']').addClass('current');
   }
$(setCurrentHamburgerMenuItem);
