// Sélection des éléments
const rowElements = document.querySelectorAll(".row");
const projects = document.querySelector(".content");
const preview = document.querySelector(".preview");
const previewImg = document.querySelector(".preview-img");
const container = document.querySelector(".container");

let isInside = false;
let isEnlarged = false;

// Positions des images pour l'aperçu
const bgPositions = {
  p1: "0 0%",
  p2: "0 11.11%",
  p3: "0 22.22%",
  p4: "0 33.33%",
  p5: "0 44.44%",
  p6: "0 55.55%",
  p7: "0 66.66%",
};

// ---------------------
// Navigation au clic sur les projets
// ---------------------
rowElements.forEach((row) => {
  row.addEventListener("click", function() {
    const dataLink = row.getAttribute("data-link");
    if (dataLink) {
      window.location.href = dataLink;
    }
  });
});

// ---------------------
// Aperçu au survol (preview)
// ---------------------
const isMouseInsideContainer = (e) => {
  const containerRect = projects.getBoundingClientRect();
  return (
    e.pageX >= containerRect.left &&
    e.pageX <= containerRect.right &&
    e.pageY >= containerRect.top &&
    e.pageY <= containerRect.bottom
  );
};

const moveStuff = (e) => {
  const mouseInside = isMouseInsideContainer(e);
  if (mouseInside !== isInside) {
    isInside = mouseInside;
  }
};

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

window.addEventListener("mousemove", moveStuff);

container.addEventListener('mouseenter', () => gsap.to(preview, { duration: 0.2, scale: 1 }));
container.addEventListener('mouseleave', () => gsap.to(preview, { duration: 0.2, scale: 0 }));

Array.from(projects.children).forEach((project) => {
  project.addEventListener("mousemove", moveProject);
  project.addEventListener("mousemove", moveProjectImg.bind(null, project));
});

// ---------------------
// Navigation projets précédent / suivant
// ---------------------
document.addEventListener("DOMContentLoaded", function () {
  const pages = ["adoration", "rcly", "jejudo", "lafete", "aquacamping","dragrace","experiments"];
  const currentPage = window.location.pathname.split("/").pop();
  const currentPageIndex = pages.indexOf(currentPage);

  document.getElementById("nextPage").addEventListener("click", function () {
    const nextPageIndex = (currentPageIndex + 1) % pages.length;
    window.location.href = pages[nextPageIndex];
  });

  document.getElementById("previousPage").addEventListener("click", function () {
    const previousPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
    window.location.href = pages[previousPageIndex];
  });
});

// ---------------------
// Activation du bouton correspondant à la page actuelle
// ---------------------
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split('/').pop();
  const menuButtons = document.querySelectorAll(".bouttonmenu");
  menuButtons.forEach(button => {
    if (button.getAttribute("data-link") === currentPage) {
      button.classList.add("active");
      button.setAttribute("disabled", "true");
    }
  });
});

// ---------------------
// Overlay / enlarge
// ---------------------
const toggleOverlay = () => {
  gsap.to("#overlay-dark", { duration: 1, top: isEnlarged ? "-100%" : "0%", ease: "power3.inOut" });
  isEnlarged = !isEnlarged;
};

document.querySelector('.enlarge')?.addEventListener('click', toggleOverlay);
document.querySelector('.enlarge3')?.addEventListener('click', toggleOverlay);
document.querySelector('.circlezoom')?.addEventListener('click', () => {
  gsap.to("#overlay-dark", { duration: 1, top: "-100%", ease: "power3.inOut" });
  isEnlarged = false;
});
