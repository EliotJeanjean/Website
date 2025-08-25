document.getElementById("menu").innerHTML =`
<div class="container">
<div class="content">
<div class="divider-top"></div>
<!--
<div class="personalease row" data-link="personalease" id="p1">
<div class="col over">⚇ PerEase</div>
<div class="col">Edito</div>
<div class="col">2024</div>
</div>
<div class="divider"></div>
-->
<div class="adoration row" data-link="adoration" id="p1">
<div class="col over">✲ Adoration</div>
<div class="col">Compositing</div>
<div class="col">2024</div>
</div>
<div class="divider"></div>
<div class="rcly row" data-link="rcly" id="p2">
<div class="col">✣ Rcly</div>
<div class="col">Music video</div>
<div class="col">2023</div>
</div>
<div class="divider"></div>
<div class="jejudo nav row" data-link="jejudo" id="p3">
<div class="col over">✻ Jejudo</div>
<div class="col">Edito</div>
<div class="col">2023</div>
</div>
<div class="divider"></div>
<div class="lafete row" data-link="lafete" id="p4">
<div class="col">✺ Eclipse</div>
<div class="col">Fanzine</div>
<div class="col">2023</div>
</div>
<div class="divider"></div>
<div class="aquacamping row" data-link="aquacamping" id="p5">
<div class="col">❉ Aquacamp</div>
<div class="col">Edito</div>
<div class="col">2023</div>
</div>
<div class="divider"></div>
<div class="dragrace row" data-link="dragrace" id="p6">
<div class="col">☽˚⋆ Dragrace</div>
<div class="col">Headwear</div>
<div class="col">2023</div>
</div>  
<div class="divider"></div>
<div class="experiments row" data-link="experiments" id="p7">
<div class="col">⁂ Experiments</div>
<div class="col">Mixed media</div>
<div class="col">2022</div>
<div class="divider-bot"></div>
</div>
</div>
`
;

const rowElements = document.querySelectorAll(".row");

rowElements.forEach((row) => {
  row.addEventListener("click", function() {
    const dataLink = row.getAttribute("data-link");
    if (dataLink) {
      // Redirect to the link specified in data-link
      window.location.href = dataLink; // You may need to adjust the URL format as per your project structure
    }
  });
});

const projects = document.querySelector(".content");
const preview = document.querySelector(".preview");
const previewImg = document.querySelector(".preview-img");
const container = document.querySelector(".container"); // Assuming "container" is a class

let isInside = false;

const bgPositions = {
  p1: "0 0%",
  p2: "0 11.11%",
  p3: "0 22.22%",
  p4: "0 33.33%",
  p5: "0 44.44%",
  p6: "0 55.55%",
  p7: "0 66.66%",
};

const moveStuff = (e) => {
  const mouseInside = isMouseInsideContainer(e);
  if (mouseInside !== isInside) {
    isInside = mouseInside;
  }
};
// Function to handle mouse enter event
const handleMouseEnter = () => {
  gsap.to(preview, { duration: 0.2, scale: 1 });
};

// Function to handle mouse leave event
const handleMouseLeave = () => {
  gsap.to(preview, { duration: 0.2, scale: 0 });
};
container.addEventListener('mouseenter', handleMouseEnter);
container.addEventListener('mouseleave', handleMouseLeave);

const moveProject = (e) => {
  const previewRect = preview.getBoundingClientRect();
  const offsetX = previewRect.width / 2;
  const offsetY = previewRect.height / 2;

  preview.style.left = e.pageX - offsetX + "px";
  preview.style.top = e.pageY - offsetY + "px";
};

const moveProjectImg = (project) => {
  const projectId = project.id;
  gsap.to(previewImg, { duration: 0.6, backgroundPosition: bgPositions[projectId] || "0 0" });
};

const isMouseInsideContainer = (e) => {
  const containerRect = projects.getBoundingClientRect();
  return (
    e.pageX >= containerRect.left &&
    e.pageX <= containerRect.right &&
    e.pageY >= containerRect.top &&
    e.pageY <= containerRect.bottom
  );
};

window.addEventListener("mousemove", moveStuff);

Array.from(projects.children).forEach((project) => {
  project.addEventListener("mousemove", moveProject);
  project.addEventListener("mousemove", moveProjectImg.bind(null, project));
});

document.addEventListener("DOMContentLoaded", function () {
  // Liste des pages
  const pages = ["adoration", "rcly", "jejudo", "lafete", "aquacamping","dragrace","experiments"];

  // Récupérer le nom de la page actuelle
  const currentPage = window.location.pathname.split("/").pop();

  // Trouver l'index de la page actuelle dans la liste
  const currentPageIndex = pages.indexOf(currentPage);

  // Bouton "Projet Suivant"
  document.getElementById("nextPage").addEventListener("click", function () {
    const nextPageIndex = (currentPageIndex + 1) % pages.length;
    navigateToPage(nextPageIndex);
  });

  // Bouton "Projet Précédent"
  document.getElementById("previousPage").addEventListener("click", function () {
    const previousPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
    navigateToPage(previousPageIndex);
  });

  // Fonction pour naviguer vers la page spécifiée
  function navigateToPage(index) {
    const pageLink = pages[index];
    window.location.href = pageLink;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Récupérer le chemin complet de l'URL de la page actuelle
  const currentPath = window.location.pathname;

  // Extraire le nom de la page à partir du chemin
  const currentPage = currentPath.split('/').pop();

  // Récupérer tous les boutons du menu
  const menuButtons = document.querySelectorAll(".bouttonmenu");

  // Parcourir les boutons et activer le bouton correspondant à la page actuelle
  menuButtons.forEach(function (button) {
    const buttonLink = button.getAttribute("data-link");
    if (buttonLink === currentPage) {
      button.classList.add("active"); // Ajoutez la classe "active" pour activer le bouton
      button.setAttribute("disabled", "true"); // Désactivez le lien
    }
  });
});
let isEnlarged = false;

document.querySelector('.enlarge').addEventListener('click', function() {
  if (isEnlarged) {
    // Si l'élément est déjà agrandi, réinitialisez la position 'top' à -100%
    gsap.to("#overlay-dark", { duration: 1, top: "-100%", ease: "power3.inOut", delay: 0 });
    isEnlarged = false;
  } else {
    // Si l'élément n'est pas encore agrandi, animez-le vers "top: 0%"
    gsap.to("#overlay-dark", { duration: 1, top: "0%", ease: "power3.inOut", delay: 0 });
    isEnlarged = true;
  }
});
document.querySelector('.enlarge3').addEventListener('click', function() {
  if (isEnlarged) {
    // Si l'élément est déjà agrandi, réinitialisez la position 'top' à -100%
    gsap.to("#overlay-dark", { duration: 1, top: "-100%", ease: "power3.inOut", delay: 0 });
    isEnlarged = false;
  } else {
    // Si l'élément n'est pas encore agrandi, animez-le vers "top: 0%"
    gsap.to("#overlay-dark", { duration: 1, top: "0%", ease: "power3.inOut", delay: 0 });
    isEnlarged = true;
  }
});
document.querySelector('.circlezoom').addEventListener('click', function() {

    // Si l'élément est déjà agrandi, réinitialisez la position 'top' à -100%
    gsap.to("#overlay-dark", { duration: 1, top: "-100%", ease: "power3.inOut", delay: 0 });
    isEnlarged = false;

});
