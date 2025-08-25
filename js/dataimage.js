document.addEventListener("DOMContentLoaded", function() {
  // Récupérez le nom de la page active à partir de l'URL
  var currentPage = window.location.pathname.split("/").pop();
  var pageName = currentPage.substring(0, currentPage.lastIndexOf(".")); // Assumant que vos pages ont une extension de ".html"

  // Récupérez tous les stylesheets présents sur la page
  var styles = document.styleSheets;

  for (var i = 0; i < styles.length; i++) {
    var rules = styles[i].cssRules || styles[i].rules; // Gérez les navigateurs qui utilisent 'cssRules' et 'rules

    if (rules) {
      for (var j = 0; j < rules.length; j++) {
        var rule = rules[j];
        if (rule.style) {
          var background = rule.style.background;
          if (background && background.includes("replace")) {
            // Remplacez "replace" par le nom de la page active dans la valeur de 'background'
            background = background.replace(/replace/g, pageName);
            rule.style.background = background;
          }
        }
      }
    }
  }
});
