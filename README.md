# &#9776;&nbsp; HamburgerMenu &nbsp;&#9776;
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

<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/master/screenshots/mobile-hamburger.png height=300 alt=screenshot align=left></kbd>
<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/master/screenshots/mobile-menu.png      height=300 alt=screenshot></kbd>
<kbd><img src=https://raw.githubusercontent.com/center-key/hamburger-menu/master/screenshots/desktop-menu.png     height=300 alt=screenshot></kbd>

### B) Usage

Example HTML for **HamburgerMenu**:

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

Modify the menu items (`<li>`) as appropriate for your website.

Include the CSS and JavaScript:

```html
<link rel=stylesheet href=hamburger-menu.css>
...
<script src=https://cdn.jsdelivr.net/npm/jquery@3.3/dist/jquery.min.js></script>
<script src=hamburger-menu.js></script>
```

...**HamburgerMenu** can be installed using **npm**:

```
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

**HamburgerMenu** automatically highlights the selected menu item.

To turn off automatic highlighting, do not load `hamburger-menu.js` file.

A menu item can be highlighted by adding the class `current` to the appropriate `<li>` tag in the
HTML or programmatically after the page has been loaded.

Examples of highlighting the menu item for "**Page 2**":

```html
         <li class=current><a href=page2.html>Page 2</a></li>
````

or

```javascript
$('nav.hamburger-menu').find('a[href=page2.html]').parent().addClass('current');
````

**Note:**
To support archaic web browsers, add polyfills for both
`[URL](https://www.npmjs.com/package/url-polyfill)`
and
`[endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#Polyfill)`
to your website.

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
