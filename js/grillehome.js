const toggle = document.querySelector('.logo-main')
const grid = document.querySelector('.grid-home');

toggle.addEventListener('click', () => {
  grid.classList.toggle('active')
})

// j'écoute les click
grid.addEventListener('click', e => {
  // je peaufine en trouvant l'élément cliqué dans grid
  let target = e.target;
  // je vérifie dans la console
  console.log(target);
  // si on a la classe item
  if(target.classList.contains('item-home')){
    // j'ajoute ou j'enlève la class item-custom
    target.classList.toggle('item-home-custom');}
      if(target.classList.contains('logo')){
    // j'ajoute ou j'enlève la class item-custom
    target.classList.toggle('logo-custom');
  }
})