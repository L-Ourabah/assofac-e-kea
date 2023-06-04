//code tabs

function openMode(ModeName) {

    var i;
  
    var x = document.getElementsByClassName("Mode");
  
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(ModeName).style.display = "block";
  
  }