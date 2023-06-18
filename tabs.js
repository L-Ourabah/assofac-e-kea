//code tabs
// créer une fonction openMode qui pour parametre modeName

function openMode(ModeName) {

  var i;

  var x = document.getElementsByClassName("Mode"); // stock dans la variable x qui l'elemnt qui a pour nom Mode

  for (i = 0; i < x.length; i++) { // donne 0 a i ; tant que i est strictement inferieur au nombre d'element contenu dans x j'incremente i
    x[i].style.display = "none"; // applique a l'element x qui a pour index i 
  }
  document.getElementById(ModeName).style.display = "block"; // applique un display block pour id l'element en parametre

}r