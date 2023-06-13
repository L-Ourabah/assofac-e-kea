
  var videoElement = document.getElementById("background-video");
  var konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];
  var konamiIndex = 0;

  function handleKonamiCode(event) {
    if (event.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        showVideo();
      }
    } else {
      konamiIndex = 0;
    }
  }

  function showVideo() {
    videoElement.style.display = "block";
    videoElement.play();
  }

  document.addEventListener("keydown", handleKonamiCode);
