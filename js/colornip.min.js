/**
 * Colornip v1.0.0 - Colornip is an pukka-easiest color-switcher on planet.
 * @link https://zafree.github.io/colornip
 * @copyright 2015-2016 Zafree
 * @license MIT
 */
!function(){"use strict";var e,t=".css",n=document.getElementById("theme"),r=n.getAttribute("href"),c=document.getElementById("colors"),o=c.children,a=c.dataset.dir;e=document.createElement("link"),e.rel="stylesheet",e.id="themeMain",e.href=r,document.head.appendChild(e),Array.prototype.forEach.call(o,function(e){var r=(e.dataset.scheme,e.dataset.color);e.setAttribute("style","background-color:"+r),e.addEventListener("click",function(e){var r=(this.dataset.color,this.dataset.scheme),c=a+r+t;n.setAttribute("href",c),n.onload=function(){themeMain.setAttribute("href",c)}})})}(),function(){"use strict";function e(t,n){return t.parentNode===n||null!==t.parentNode&&e(t.parentNode,n)}var t=document.getElementById("Switcher__control"),n=t.parentNode;t.addEventListener("click",function(e){n.classList.toggle("Switcher--show")}),document.body.addEventListener("click",function(t){var r=t.target;r===n||e(r,n)||n.classList.remove("Switcher--show")})}();