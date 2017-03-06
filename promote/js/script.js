/**
 * Created by wingoflan on 2017/3/6.
 */

$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheelControl: true,
    onInit: function (swiper) {
      swiperAnimateCache(swiper);
      swiperAnimate(swiper)
    },
    onSlideChangeEnd: function (swiper) {
      swiperAnimate(swiper);
    }
  });
});