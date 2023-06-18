// On stock dans la constante filterSelect l'élément ayant pour id category-filter
const filterSelect = document.getElementById('category-filter');
// On stock dans la constante productContainer l'élément ayant pour id product-container
const productContainer = document.getElementById('product-container');
// On stock dans la constante productItems tout les éléments ayant pour classe product-item
const productItems = document.querySelectorAll('.product-item');

// On applique sur filterSelect un écouteur d'événement pour le changement de valeur des filtres
filterSelect.addEventListener('change', (event) => {
  // On applique la valeur du filtre choisi dans la constante selectedCategory
  const selectedCategory = event.target.value;
  // On ouvre une boucle for each nommant chaque item de productItems en item.
  productItems.forEach((item) => {
    // On stock dans la constante category les enfants item, de productItems ayant pour attribu data-category
    const category = item.getAttribute('data-category');

    // Si le filtre choisi est vide ou si l'élément data-category est égale au filtre
    if (selectedCategory === '' || category === selectedCategory) {
      // On retire la classe slide-out à l'item ciblé
      item.classList.remove('slide-out');
      // On ajoute la classe slide-in à l'item ciblé
      item.classList.add('slide-in');
      // On ajoute un display flex à l'item ciblé
      item.style.display = 'flex';
    } else {
      // On retire la classe slide-in à l'item ciblé
      item.classList.remove('slide-in');
      // On ajoute la classe slide-out à l'item ciblé
      item.classList.add('slide-out');
      // On effectue une action après 1 seconde
      setTimeout(() => {
        // On applique un display none à l'item ciblé
        item.style.display = 'none';
      }, 1000); // Attendre la fin de l'animation avant de masquer l'élément
    }
  });
});

/***********************************************zoom produit modal  */



// On stock dans la constante zoomContenaire tout les éléments qui ont pour classe zoom-produit.
const zoomContenaire = document.querySelector('.zoom-produit');
// On stock dans la constante zoomBox tout les éléments qui ont pour classe zoom qui sont contenus dans zoom-produit.
const zoomBox = zoomContenaire.querySelectorAll('.zoom');

// On créer ici une boucle for each de tout les éléments ayant pour classe contenaire-produit et produit. Chaque élément sera appelé "produit"
document.querySelectorAll('.contenaire-produit .produit').forEach(produit => {
  // Lorsque l'on clique sur un élément on active la fonction suivante.
  produit.onclick = () => {
    // On applique sur tout les éléments zoom-produit un display flex
    zoomContenaire.style.display = 'flex';
    // On stock dans la constante name, les éléments ayant pour attribu "data-name"
    const name = produit.getAttribute('data-name');
    // On effectue une boucle for each sur les éléments zoom contenu dans zoom-produit, chaque élément sera appelé zoom.
    zoomBox.forEach(zoom => {
      // On stock dans la constante target tout les éléments de zoomBox ayant pour attribu data-target
      const target = zoom.getAttribute('data-target');
      // Si le contenu de la constante name est égal au contenu de target
      if (name == target) {
        // On applique la classe active à chaque éléments de zoomBox.
        zoom.classList.add('active');
      }
    });
  };
});

zoomBox.forEach(close => { // chaque de zoomBox sera appelé close
  // Applique un écouteur d'événement sur le click sur les éléments qui ont pour classe fa-times.
  close.querySelector('.fa-times').onclick = () => {
    // On retire la classe active à l'élément close séléctionné
    close.classList.remove('active');
    // On applique un display none aux éléments de zoomContenaire
    zoomContenaire.style.display = 'none';
  };
});
