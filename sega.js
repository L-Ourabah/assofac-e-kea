// Code Konami
var konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "l",
    "o"
];

var konamiIndex = 0;

// Élément de l'image
var imageElement = document.getElementById("imageElement");

var pageContent = document.getElementById("pageContent");

// Fonction de gestion de l'événement de touche
function konamiCodeHandler(event) { // si 1er touche appuyer correspond a la touche de l'index zero en passe a la suivante
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;

        if (konamiIndex === konamiCode.length) {
            // Action à effectuer lorsque le code est entré correctement
            //  afficher une image
            displayImage();


            // Masquer le reste de la page
            hidePageContent();


            // Réinitialiser l'index pour permettre de saisir le code à nouveau
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
}

// Ajouter l'événement de touche au document
document.addEventListener("keydown", konamiCodeHandler, false);

// Fonction pour afficher l'image
function displayImage() {
    // Définir le chemin de l'image à afficher
    var imagePath = "./images/Iznogoud-Moi-calife.jpg";


    // Mettre à jour l'attribut src de l'élément image
    imageElement.src = imagePath;

    // Afficher l'élément image
    imageElement.style.display = "block";
}

// Fonction pour masquer le reste de la page
function hidePageContent() {
    // Masquer l'élément de contenu de la page
    pageContent.style.display = "none";
}