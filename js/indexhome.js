
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 600) {
  var bouttons = document.querySelectorAll(".bouttonmenu");

  var page1 = document.querySelector(".page1");
  var page2 = document.querySelector(".page2");

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
      complete: function(anim) {
        // Cette fonction sera appelée lorsque l'animation est terminée
        setTimeout(function() {
          // Rétablir l'état initial du masque ici
          anime({
            targets: page2,
            duration: 10,
            easing: 'easeOutQuad',
            clipPath:  `circle(${maxDistance}px at ${buttonX}px ${buttonY}px)`,
          });
        }, 500); // Retard d'une seconde (1000 millisecondes)
      },
    });
    
  });
  }
});
