# Colornip

Colornip is an pukka-easiest color-switcher on planet. Simple, small, fast, pure JavaScript. Fun.

### Demo
https://zafree.github.io/colornip

![Colornip Demo][demo]

[demo]: https://d13yacurqjgara.cloudfront.net/users/449253/screenshots/2998048/colornip.gif

### How

1. Link css files. (Be careful about `id="theme"`. Don't change it)

  ```html
  <link rel="stylesheet" href="css/colornip.css">
  <link id="theme" rel="stylesheet" href="css/theme-light.css">
  ```

2. Add `<script>` to bottom of page

  ```html
  <script src="js/colornip.js"></script>
  ```

3.  Set `data-dir` path of your theme directory for  `id="colors"`

  ```html
  <ul id="colors" data-dir="css/theme-color/">
    ...
  </ul>
  ```

4. Set `data-scheme` and `data-color` for each `li`

  ```html
  <ul id="colors" data-dir="css/theme-color/">
    <li data-scheme="theme-light" data-color="#f2f2f2"></li>
    <li data-scheme="theme-blue" data-color="#d3f8ff"></li>
    <li data-scheme="theme-orange" data-color="#fff4d3"></li>
    <li data-scheme="theme-green" data-color="#d3ffd2"></li>
    <li data-scheme="theme-pink" data-color="#ffe4f7"></li>
    ...
  </ul>
  ```

### Why

It's the best way to change theme-color. No dependencies. Pure JavaScript. Nice switcher animation effect. Better user experience. Happy client. Wow and wow.


### Where

Colornip should (in theory) work in all relevant browsers (ie6+). If not, create an issue! Thanks!


### Who

Written by <a href="http://zafree.github.io/" target="_blank">Zafree</a>, made better by you.
