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
showSlides(slideIndex);

// Contrôles suivant/précédent
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Contrôles des vignettes d'images
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Afficher les diapositives
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  
  // Gérer les dépassements d'indice
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  // Masquer toutes les diapositives
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Supprimer la classe "active" de toutes les vignettes
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-apercu", "");
  }
  
  // Afficher la diapositive en cours et marquer la vignette correspondante comme active
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-apercu";
}