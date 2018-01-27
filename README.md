# &#9776;&nbsp; Hamburger Menu &nbsp;&#9776;
*A responsive CSS solution*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/center-key/hamburger-menu/blob/master/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/hamburger-menu.svg)](https://www.npmjs.com/package/hamburger-menu)
[![Known Vulnerabilities](https://snyk.io/test/github/center-key/hamburger-menu/badge.svg)](https://snyk.io/test/github/center-key/hamburger-menu)
[![Build Status](https://travis-ci.org/center-key/hamburger-menu.svg)](https://travis-ci.org/center-key/hamburger-menu)

Hamburger menus should be used with caution as they can impair user interaction.  As they say, *"Out of sight, out of mind"*.

When you do need a hamburger menu, this solution uses CSS to replace the navigation menu with a tappable hamburger icon on mobile devices or any browser with a sufficiently narrow screen.  Tapping the hamburger reveals the navigation menu with smooth CSS animation.

### A) Take it for spin

Try it out:<br>
[centerkey.com/hamburger-menu](http://centerkey.com/hamburger-menu/spec)

<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/master/screenshots/mobile-hamburger.png align=left height=275 alt=screenshot></kbd>
<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/master/screenshots/mobile-menu.png      align=left height=275 alt=screenshot></kbd>
<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/master/screenshots/desktop-menu.png     align=left height=275 alt=screenshot></kbd>

### B) Usage

HTML for Hamburger Menu:

```html
<nav class=hamburger-menu>
   <a class=hamburger href=#>&#9776;</a>
   <ul>
      <li><a href=page1>Page 1</a></li>
      <li><a href=page2>Page 2</a></li>
      <li><a href=page3>Page 3</a></li>
   </ul>
</nav>
````

Include the CSS and JavaScript:

```html
<link rel=stylesheet href=hamburger-menu.css>
...
<script src=https://cdn.jsdelivr.net/npm/jquery@3.3/dist/jquery.min.js></script>
<script src=hamburger-menu.js></script>
```

...or install with npm:

```
$ npm install hamburger-menu
```

### C) Customize

Change the width and colors by adding the CSS below into your website and modifying it:

```css
/* Hamburger Menu width and colors */
body {
   padding-right: 50px;              /* gutter on left and right sides of the main content */
   padding-left: 200px;              /* set to "padding-right" plus "width" of aside */
   }
nav.hamburger-menu aside {
   width: 150px;                     /* use "width: auto" to automatically adjust to menu items */
   }
nav.hamburger-menu a {
   color: gainsboro;                 /* menu font color */
   }
nav.hamburger-menu .hamburger,
nav.hamburger-menu aside {
   background-color: seagreen;       /* menu background color */
   }
nav.hamburger-menu li.current >a {
   border-color: white;              /* border color for selected menu item */
   }
nav.hamburger-menu li.current >a,
nav.hamburger-menu li a:hover {
   color: white;                     /* menu font highlight color on hover */
   background-color: darkseagreen;   /* menu background highlight color on hover */
   }
```

### D) Highlight menu item for current page

To automatically highlight the selected menu item, add the `data-menu` attribute to each `<li>` tag in the Hamburger Menu and to the `<main>` tag.

Example `products.html` page:

```html
...
<header>
   <nav class=hamburger-menu>
      <a class=hamburger href=#>&#9776;</a>
      <ul>
         <li data-menu=gateway> <a href=.>Home</a></li>
         <li data-menu=products><a href=products.html>Products</a></li>
         <li data-menu=about>   <a href=about.html>About</a></li>
      </ul>
   </nav>
</header>

<main data-menu=products>
   <h1>Products</h1>
   <p>Product info...</p>
</main>
...
```

### E) Removing jQuery dependency

The `hamburger-menu.js` file depends on jQuery, but you can eliminate **both** jQuery and the `hamburger-menu.js` file by incorporating this one line of JavaScript in your website:

```javascript
document.addEventListener('click', () => {});  //workaround for sticky hover on mobile
```

### F) Issues

This library has been tested on iPhone and Android mobile devices.
If you encounter a bug or have a question, submit an [issue](https://github.com/center-key/hamburger-menu/issues).

### G) License

[MIT](LICENSE.txt)
