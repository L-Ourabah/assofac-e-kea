/// Ouvrir le modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Fermer le modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Indice de la diapositive en cours
var slideIndex = 1;
showSlides(slideIndex); // fait appel a la fonction showSlides avec slideIndex en parametre

// Contrôles suivant/précédent
function plusSlides(n) {
  // Passe à la slide suivante
  showSlides(slideIndex += n); // incremtation n a slideIndex
}

// Contrôles des vignettes d'images
function currentSlide(n) {
  // Affiche la vignette correspondant à l'index.
  showSlides(slideIndex = n);
}

// Afficher les diapositives
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("apercu");

  // Gérer les dépassements d'indice
  if (n > slides.length) {
    // Si l'index est supérieur au nombre d'éléments dans slides, on revient au 1er index.
    slideIndex = 1;
  }
  if (n < 1) {
    // Si l'index est inférieur à 1, on revient au dernier index.
    slideIndex = slides.length;
  }

  // Masquer toutes les diapositives
  for (i = 0; i < slides.length; i++) {
    // i = 0 ; tant que i est inférieur au nombre d'éléments dans slides; on incrémente i.
    // On applique un display none, sur chaque éléments de slides en fonction de son index.
    slides[i].style.display = "none";
  }

  // Supprimer la classe "active" de toutes les vignettes
  for (i = 0; i < dots.length; i++) {
    // i = 0; tant que i est inférieur au nombre d'éléments dans dots; on incrémente i.
    // On retire la classe "active-apercu" de l'élément dots suivi de son index.
    dots[i].className = dots[i].className.replace(" active-apercu", "");
  }

  // Afficher la diapositive en cours et marquer la vignette correspondante comme active
  // On retire 1 à slideIndex pour avoir l'index du tableau dans ce cas 0.
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active-apercu";
}
