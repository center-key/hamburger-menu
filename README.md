# &#9776;&nbsp; HamburgerMenu &nbsp;&#9776;
_A responsive CSS solution_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/center-key/hamburger-menu/blob/main/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/hamburger-menu.svg)](https://www.npmjs.com/package/hamburger-menu)
[![Vulnerabilities](https://snyk.io/test/github/center-key/hamburger-menu/badge.svg)](https://snyk.io/test/github/center-key/hamburger-menu)
[![Hits](https://data.jsdelivr.com/v1/package/npm/hamburger-menu/badge?style=rounded)](https://www.jsdelivr.com/package/npm/hamburger-menu)
[![Build](https://github.com/center-key/hamburger-menu/workflows/build/badge.svg)](https://github.com/center-key/hamburger-menu/actions?query=workflow%3Abuild)

Hamburger button menus should be used with caution as they can impair user interaction.
As they say, *"Out of sight, out of mind"*.

When you do need a hamburger button menu, this solution uses CSS to replace the navigation menu
with a tappable hamburger icon on mobile devices or any browser with a sufficiently narrow screen.
Tapping the hamburger reveals the navigation menu with smooth CSS animation.

### A) Take it for spin
Try it out:<br>
https://hamburger-menu.js.org

<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/main/screenshots/mobile-hamburger.png height=300 alt=screenshot align=left></kbd>
<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/main/screenshots/mobile-menu.png      height=300 alt=screenshot></kbd>
<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/main/screenshots/desktop-menu.png     height=300 alt=screenshot></kbd>

### B) Setup
Include the **HamburgerMenu** CSS and JavaScript:
```html
...
<link rel=stylesheet href=hamburger-menu.css>
...
<script src=https://cdn.jsdelivr.net/npm/jquery@3.6/dist/jquery.min.js></script>
<script src=hamburger-menu.js></script>
...
```
...or from the [jsDelivr CDN](https://www.jsdelivr.com/package/npm/hamburger-menu):
```html
...
<link rel=stylesheet href=https://cdn.jsdelivr.net/npm/hamburger-menu@0.3/dist/hamburger-menu.min.css>
...
<script src=https://cdn.jsdelivr.net/npm/jquery@3.6/dist/jquery.min.js></script>
<script src=https://cdn.jsdelivr.net/npm/hamburger-menu@0.3/dist/hamburger-menu.min.js></script>
...
```

...the **HamburgerMenu** files can be installed using **npm**:
```terminal
$ npm install hamburger-menu
```

### C) Usage
See the
[**x3000.html**](https://github.com/center-key/hamburger-menu/blob/main/spec/multipage/products/x3000.html)
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

### D) Customize
Change the width and colors by adding the CSS below into your website and modifying it:
```css
/* HamburgerMenu ☰ Custom width and colors */
body {
   padding-right: 50px;         /* gutter on left and right sides of page */
   padding-left: 200px;         /* set to "padding-right" + "width"(aside) */
   }
nav.hamburger-menu aside {
   width: 150px;                /* menu width */
   }
nav.hamburger-menu {
   color: gainsboro;            /* menu font color */
   background-color: teal;      /* menu background color */
   }
nav.hamburger-menu aside ul li.current {
   border-color: white;         /* border color for selected menu item */
   }
nav.hamburger-menu aside ul li.current >span,
nav.hamburger-menu aside ul li.current >a,
nav.hamburger-menu aside ul li >span:hover,
nav.hamburger-menu aside ul li >a:hover {
   color: white;                /* menu font highlight color */
   background-color: darkcyan;  /* menu background highlight color */
   }
```

### E) Highlight menu item for current page
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
To support old legacy web browsers, add a polyfill for
[URL](https://www.npmjs.com/package/url-polyfill)
to your website.

### F) Removing jQuery dependency
The `hamburger-menu.js` file depends on jQuery, but you can eliminate **both** jQuery
and the `hamburger-menu.js` file by incorporating this one line of JavaScript in your website:
```javascript
document.addEventListener('click', () => {});  //workaround for sticky hover on mobile
```

### G) Issues
This library has been tested on iPhone and Android mobile devices.
If you encounter a bug or have a question, submit an
[issue](https://github.com/center-key/hamburger-menu/issues).

---
[MIT License](LICENSE.txt)
