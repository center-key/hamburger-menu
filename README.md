### Hamburger Menu

*A responsive CSS solution*
---

Hamburger menus should be used with caution as they can impair user interaction.  As they say, *"Out of sight, out of mind"*.

When you do need a hamburger menu, this solution uses CSS to replace the menu with a hamburger icon on mobile devices or any sufficiently narrow screen.

Test it out and view the source code at:<br>
[centerkey.com/hamgurger-menu](http://centerkey.com/hamgurger-menu)

### Usage

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
<script src=https://cdn.jsdelivr.net/jquery/3/jquery.min.js></script>
<script src=hamburger-menu.js></script>
```

That's it.

### Colors

Customize the colors by editing or overriding:

```css
/* Hamburger Menu Colors */
nav.hamburger-menu .hamburger,
nav.hamburger-menu >ul >li >a {
   color: gainsboro;              /* menu font color */
   }
nav.hamburger-menu .hamburger,
nav.hamburger-menu >ul {
   background-color: black;       /* menu background color */
   }
nav.hamburger-menu >ul >li.current >a,
nav.hamburger-menu >ul >li:hover >a {
   color: white;                  /* menu font highlight color on hover */
   background-color: dimgray;     /* menu background highlight color on hover */
   }
```

### Highlight menu item for current page

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

### Removing jQuery Dependency

The `hamburger-menu.js` file depends on jQuery, but you can eliminate **both** jQuery and the `hamburger-menu.js` file by incorporating this line of JavaScript in your website:

```javascript
document.addEventListener('click', () => {});  //workaround for sticky hover on mobile
```

### License

MIT or WTFPL (your choice)
