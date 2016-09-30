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
