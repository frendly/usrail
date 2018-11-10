import tippy from './js/tippy.all.min.js';
import './js/button-top.js';
import './style.styl';
import carringOffset from './js/carring-offset';
import mobileMenu from './js/mobile-menu';

tippy.setDefaults({
  arrow: true,
  placement: "left",
  // arrowType: 'round',
  // duration: 0,
  trigger: "click",
  // theme: "light-border"
})

document.addEventListener("DOMContentLoaded", function() {
  carringOffset();
  mobileMenu();
});