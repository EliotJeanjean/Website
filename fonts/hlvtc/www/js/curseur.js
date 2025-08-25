$(document).ready(function () {
 //variables
    var cH = $('#crosshair-h'),
        cV = $('#crosshair-v');
    //position de la croix
    $(this).on('mousemove touchmove', function(e) {
      var x = e.pageX - 1;
      var y = e.pageY - 1;
      cH.css('top', e.pageY);
      cV.css('left', e.pageX);
//position de la souris affichée :
      $('#mousepos').css({
        top: e.pageY + 'px',
        left: e.pageX + 'px'
      }, 800);
      $('#mousepos').text( "X: " + x + "px, Y: " + y + "px");
      e.stopPropagation();
    });
  });
  //test
  let cH = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let cV = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let mouse = { x: cH.x, y: cV.y };
  const speed = 0.01;
  let fpms = 60 / 1000;

  $(window).scroll(function() {
    if ($(this).scrollTop()> 20) {
        $('.souriscroll').fadeOut();
     }
    else {
      $('.souriscroll').fadeIn();
     }
 });
 $(window).scroll(function(){
  $(".hero-image").css("opacity", 1 - $(window).scrollTop() / 450);
  $(".titretop").css("opacity", 1 - $(window).scrollTop() / 550);
});
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  document.getElementById('time').innerHTML =
  +h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
} 
startTime();

