/**
 * Colornip v1.0.0 - Colornip is an pukka-easiest color-switcher on planet.
 * @link https://zafree.github.io/colornip
 * @copyright 2015-2016 Zafree
 * @license MIT
 */
;(function() {
    'use strict';


    // take care 
    // you can set theme/file extension.
    // e.g. ".css" or ".min.css"
    var extension = ".css";


    // get theme
    // get the individual color
    var theme = document.getElementById("theme"),
        href = theme.getAttribute("href"),
        ul = document.getElementById("colors"),
        lis = ul.children,
        dir = ul.dataset.dir;


    // Create new link
    // for smooth loading
    var createLinkForSmoothLoading;
    createLinkForSmoothLoading = document.createElement("link");
    createLinkForSmoothLoading.rel = "stylesheet";
    createLinkForSmoothLoading.id = "themeMain";
    createLinkForSmoothLoading.href = href;
    document.head.appendChild(createLinkForSmoothLoading);


    // here is the fun part
    // get data scheme and color from DOM
    // and set theme in new created link
    Array.prototype.forEach.call(lis, function(li){
        var scheme = li.dataset.scheme;
        var color = li.dataset.color;
        li.setAttribute('style', 'background-color:'+color);
        li.addEventListener('click', function(e){
            var color = this.dataset.color;
            var scheme = this.dataset.scheme;
            var cssPath = dir+scheme+extension;
            theme.setAttribute('href', cssPath);
            theme.onload = function(){
                themeMain.setAttribute('href', cssPath);
            };
        });
    });

})();

;(function() {
    'use strict';


    // get Switcher
    // add click event
    // toggle class Switcher--show
    var switcherControl = document.getElementById("Switcher__control"),
        switcherControlParent = switcherControl.parentNode;

    switcherControl.addEventListener('click', function(e){
        switcherControlParent.classList.toggle('Switcher--show');
    });


    // outside click event
    // click event to an element that is outside the content area
    // Then, inside the event, check whether the target is the content area
    // Or a direct or indirect child of the content area.
    document.body.addEventListener('click', function(e) {
      var target = e.target;
      if (target !== switcherControlParent && !isChildOff(target, switcherControlParent)) {
        switcherControlParent.classList.remove('Switcher--show');
      }
    });

    function isChildOff(child, parent) {
      if (child.parentNode === parent) {
        return true;
      } else if (child.parentNode === null) {
        return false;
      } else {
        return isChildOff(child.parentNode, parent);
      }
    }

})();
