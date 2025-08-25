$(document).ready(function () {
  // Variables pour les croix
  var cH = $('#crosshair-h'),
      cV = $('#crosshair-v');

  // Position de la croix
  $(document).on('mousemove touchmove', function(e) {
    var x = e.pageX - 1;
    var y = e.pageY - 1;

    cH.css('top', e.pageY);
    cV.css('left', e.pageX);

    // Position de la souris affichée
    $('#mousepos').css({
      top: e.pageY + 'px',
      left: e.pageX + 'px'
    });

    $('#mousepos').text("X: " + x + "px, Y: " + y + "px");
    e.stopPropagation();
  });

  // Test
  var cHPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  var cVPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  var mousePos = { x: cHPos.x, y: cVPos.y };
  var speed = 0.01;
  var fpms = 60 / 1000;

  // Gestion du défilement
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('.souriscroll').fadeOut();
    } else {
      $('.souriscroll').fadeIn();
    }

    $(".hero-image").css("opacity", 1 - $(window).scrollTop() / 450);
    $(".titretop").css("opacity", 1 - $(window).scrollTop() / 550);
  });

  // Fonction utilitaire pour ajouter un zéro
  function checkTime(i) {
    if (i < 10) { i = "0" + i; }
    return i;
  }
});
