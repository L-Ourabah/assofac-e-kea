var konamiCodeSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var currentCodeSequence = [];
var changeHeaderColor = document.getElementById("header-nav");
var changeFooterColor = document.getElementById("footer-color");
var changePromotionColor = document.getElementById("promotion");
var changeDivColor = document.getElementById("section-bienvenue");
var changeDiv2Color = document.getElementById("section-inspirations");
var changeDiv3Color = document.getElementById("section-services");
var changeBurgerColor = document.getElementById("burger-menu-nav");
var changeCopyrightColor = document.getElementById("copyright");

document.addEventListener('keydown', function(event) {
  var key = event.key;

  if (key === konamiCodeSequence[currentCodeSequence.length]) {
    currentCodeSequence.push(key);

    if (currentCodeSequence.length === konamiCodeSequence.length) {
      // La séquence de commandes du Konami Code a été entrée correctement
      // Ajoutez ici le code à exécuter pour activer votre easter egg
      changeHeaderColor.style.backgroundColor = '#88292f';
      changeFooterColor.style.backgroundColor = '#88292f';
      changePromotionColor.style.backgroundColor = '#246c3e';
      changeDivColor.style.backgroundColor = '#763249';
      changeDiv2Color.style.backgroundColor = '#876523';
      changeDiv3Color.style.backgroundColor = '#fd9080';
      changeBurgerColor.style.backgroundColor = '#88292f';
      changeCopyrightColor.style.backgroundColor = '#763249';
      // Réinitialiser la séquence après avoir activé l'easter egg (facultatif)
      currentCodeSequence = [];
    }
  } else {
    // Réinitialiser la séquence si la touche frappée ne correspond pas à la prochaine touche attendue
    currentCodeSequence = [];
  }
});