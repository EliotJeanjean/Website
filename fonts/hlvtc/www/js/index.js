document.addEventListener("DOMContentLoaded", function () {
  var bouttons = document.querySelectorAll(".boutton");
  var hero = document.getElementById("hero");
  var backgroundImage = "../img/img2.jpg"; // Image de fond par défaut

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

  // Ajouter un gestionnaire de clic au contenu pour la navigation
  hero.addEventListener("click", function () {
    // Récupérer le lien associé à l'image de fond actuelle
    var link = Array.from(bouttons).find(function (boutton) {
      return boutton.getAttribute("data-image") === backgroundImage;
    }).getAttribute("data-link");

    // Naviguer vers le lien associé
    if (link) {
      window.location.href = link;
    }
  });
});
