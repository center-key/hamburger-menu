# &#9776;&nbsp; HamburgerMenu &nbsp;&#9776;
*A responsive CSS solution*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/center-key/hamburger-menu/blob/master/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/hamburger-menu.svg)](https://www.npmjs.com/package/hamburger-menu)
[![Known Vulnerabilities](https://snyk.io/test/github/center-key/hamburger-menu/badge.svg)](https://snyk.io/test/github/center-key/hamburger-menu)
[![Build Status](https://travis-ci.org/center-key/hamburger-menu.svg)](https://travis-ci.org/center-key/hamburger-menu)

Hamburger button menus should be used with caution as they can impair user interaction.
As they say, *"Out of sight, out of mind"*.

When you do need a hamburger button menu, this solution uses CSS to replace the navigation menu
with a tappable hamburger icon on mobile devices or any browser with a sufficiently narrow screen.
Tapping the hamburger reveals the navigation menu with smooth CSS animation.

### A) Take it for spin

Try it out:<br>
[centerkey.com/hamburger-menu](http://centerkey.com/hamburger-menu/spec)<br>
*(manually resize your desktop browser to the smallest width to simulate a mobile device)*

<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/master/screenshots/mobile-hamburger.png height=300 alt=screenshot align=left></kbd>
<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/master/screenshots/mobile-menu.png      height=300 alt=screenshot></kbd>
<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/master/screenshots/desktop-menu.png     height=300 alt=screenshot></kbd>

### B) Usage

See the
[**x3000.html**](https://github.com/center-key/hamburger-menu/blob/master/spec/products/x3000.html)
test page for an example or follow the instructions below.

Insert the following HTML into your web page and modify the menu items (`<li>`) as appropriate
for your website:

```html
<nav class=hamburger-menu>
   <a class=hamburger href=#>&#9776;</a>
   <aside>
      <ul>
         <li><a href=.>Home</a></li>
         <li><a href=page1.html>Page 1</a></li>
         <li><a href=page2.html>Page 2</a></li>
         <li><a href=page3.html>Page 3</a></li>
      </ul>
   </aside>
</nav>
````

Include the **HamburgerMenu** CSS and JavaScript:

```html
...
<link rel=stylesheet href=hamburger-menu.css>
...
<script src=https://cdn.jsdelivr.net/npm/jquery@3.3/dist/jquery.min.js></script>
<script src=hamburger-menu.js></script>
...
```

...or from the jsDelivr CDN:

```html
...
<link rel=stylesheet href=https://cdn.jsdelivr.net/npm/hamburger-menu@0.1/dist/hamburger-menu.min.css>
...
<script src=https://cdn.jsdelivr.net/npm/jquery@3.3/dist/jquery.min.js></script>
<script src=https://cdn.jsdelivr.net/npm/hamburger-menu@0.1/dist/hamburger-menu.min.js></script>
...
```

...the **HamburgerMenu** files can be installed using **npm**:

```terminal
$ npm install hamburger-menu
```

### C) Customize

Change the width and colors by adding the CSS below into your website and modifying it:

```css
/* HamburgerMenu width and colors */
body {
   padding-right: 50px;              /* gutter on left and right sides of the main content */
   padding-left: 200px;              /* set to "padding-right" plus "width" of aside */
   }
nav.hamburger-menu aside {
   width: 150px;                     /* use "width: auto" to automatically adjust to menu items */
   }
nav.hamburger-menu {
   color: gainsboro;                 /* menu font color */
   background-color: seagreen;       /* menu background color */
   }
nav.hamburger-menu aside ul li.current {
   border-color: white;              /* border color for selected menu item */
   }
nav.hamburger-menu aside ul li.current >span,
nav.hamburger-menu aside ul li.current >a,
nav.hamburger-menu aside ul li span:hover,
nav.hamburger-menu aside ul li a:hover {
   color: white;                     /* menu font highlight color on hover */
   background-color: darkseagreen;   /* menu background highlight color on hover */
   }
```

### D) Highlight menu item for current page

**HamburgerMenu** automatically highlights the selected menu item.

Turn off automatic highlighting by *either*:
1. Not loading the `hamburger-menu.js` file
1. Adding the class `disable-auto-highlight` to the `<aside>` element

A menu item can be highlighted by adding the class `current` to the appropriate `<li>` element in
the HTML or programmatically after the page has been loaded.

Example of highlighting the menu item for "**Page 2**":

```html
<li class=current><a href=page2.html>Page 2</a></li>
````

...and an equivalent example using jQuery:

```javascript
$('nav.hamburger-menu').find('a[href=page2.html]').parent().addClass('current');
````

**Note:**<br>
To support archaic web browsers, add a polyfill for
[URL](https://www.npmjs.com/package/url-polyfill)
to your website.

### E) Removing jQuery dependency

The `hamburger-menu.js` file depends on jQuery, but you can eliminate **both** jQuery
and the `hamburger-menu.js` file by incorporating this one line of JavaScript in your website:

```javascript
document.addEventListener('click', () => {});  //workaround for sticky hover on mobile
```

### F) Issues

This library has been tested on iPhone and Android mobile devices.
If you encounter a bug or have a question, submit an
[issue](https://github.com/center-key/hamburger-menu/issues).

### G) License

[MIT](LICENSE.txt)
