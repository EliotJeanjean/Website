
document.addEventListener("DOMContentLoaded", function () {
  var bouttons = document.querySelectorAll(".bouttonmenu");
  var hero = document.getElementById("hero");
  var backgroundImage = "../img/img2.jpg"; // Image de fond par défaut

  var page1 = document.querySelector(".page1");
  var page2 = document.querySelector(".page2");

  bouttons.forEach(function (boutton) {
    boutton.addEventListener("mouseover", function () {
      var newBackgroundImage = boutton.getAttribute("data-image");
      hero.style.backgroundImage = "url('" + newBackgroundImage + "')";
    });

    boutton.addEventListener("click", function (e) {
      e.preventDefault();
      backgroundImage = boutton.getAttribute("data-image");
      hero.style.backgroundImage = "url('" + backgroundImage + "')";
      var link = boutton.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    });
  });

  

  // Gestionnaire de clic pour le bouton
  document.querySelector('.button1').addEventListener('click', function () {
    const button = this;
    const page2 = document.querySelector('.page2');
  
    // Obtenir les coordonnées du bouton
    const buttonRect = button.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;
  
    // Calculer la distance maximale depuis le bouton jusqu'aux coins de la page
    const maxX = Math.max(buttonX, window.innerWidth - buttonX);
    const maxY = Math.max(buttonY, window.innerHeight - buttonY);
    const maxDistance = Math.sqrt(maxX * maxX + maxY * maxY);
  
    // Appliquer le masquage initial
    page2.style.clipPath = `circle(0px at ${buttonX}px ${buttonY}px)`;
    page2.style.display = 'block';
  
    // Animer la transition circulaire
    anime({
      targets: page2,
      duration: 500,
      easing: 'easeOutQuad',
      clipPath: `circle(${maxDistance}px at ${buttonX}px ${buttonY}px)`,
      complete: function () {
        page2.style.clipPath = 'none';
      },
    });
  });
  
  document.querySelector('.button2').addEventListener('click', function () {
    const button = this;
    const page2 = document.querySelector('.page2');
  
    // Obtenir les coordonnées du bouton
    const buttonRect = button.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;
  
    // Calculer la distance maximale depuis le bouton jusqu'aux coins de la page
    const maxX = Math.max(buttonX, window.innerWidth - buttonX);
    const maxY = Math.max(buttonY, window.innerHeight - buttonY);
    const maxDistance = Math.sqrt(maxX * maxX + maxY * maxY);
  
    // Appliquer le masquage initial
    page2.style.clipPath = `circle(${maxDistance}px at ${buttonX}px ${buttonY}px)`;
  
    // Animer la transition circulaire inverse pour fermer la page
    anime({
      targets: page2,
      duration: 500,
      easing: 'easeOutQuad',
      clipPath: `circle(0px at ${buttonX}px ${buttonY}px)`,
    });
    
  });
});
