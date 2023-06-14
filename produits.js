const filterSelect = document.getElementById('category-filter');
const productContainer = document.getElementById('product-container');
const productItems = document.querySelectorAll('.product-item');

filterSelect.addEventListener('change', (event) => {
  const selectedCategory = event.target.value;

  productItems.forEach((item) => {
    const category = item.getAttribute('data-category');

    if (selectedCategory === '' || category === selectedCategory) {
      item.classList.remove('slide-out');
      item.classList.add('slide-in');
      item.style.display = 'flex';
    } else {
      item.classList.remove('slide-in');
      item.classList.add('slide-out');
      setTimeout(() => {
        item.style.display = 'none';
      }, 300); // Attendre la fin de l'animation avant de masquer l'élément
    }
  });

  const selectedOption = filterSelect.options[filterSelect.selectedIndex];
  selectedOption.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/***********************************************zoom produit modal  */




const zoomContenaire = document.querySelector('.zoom-produit');
const zoomBox = zoomContenaire.querySelectorAll('.zoom');

document.querySelectorAll('.contenaire-produit .produit').forEach(produit => {
  produit.onclick = () => {
    zoomContenaire.style.display = 'flex';
    const name = produit.getAttribute('data-name');

    zoomBox.forEach(zoom => {
      const target = zoom.getAttribute('data-target');
      if (name == target) {
        zoom.classList.add('active');
      }
    });
  };
});

zoomBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    close.classList.remove('active');
    zoomContenaire.style.display = 'none';
  };
});
