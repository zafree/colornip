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
