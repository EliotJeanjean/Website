document.addEventListener("DOMContentLoaded", function () {
  // Récupérer l'ID de la page actuelle (en supprimant l'extension .html et en nettoyant les caractères spéciaux)
  const currentURL = window.location.pathname;
  const currentPageID = currentURL.replace(/\/|\.html/g, ""); // Nettoie l'URL

  // Générer le sélecteur de classe basé sur currentPageID
  const classSelector = `.${currentPageID}`;

  // Sélectionner le bouton correspondant à la page actuelle par le sélecteur de classe généré
  const currentPageButtons = document.querySelectorAll(classSelector);

  currentPageButtons.forEach(function (button) {
    button.classList.add("active"); // Ajoutez la classe "active" pour activer les boutons
  });
});
