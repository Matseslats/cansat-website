tightness = 1;

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    console.log(" --- ")
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight; // Få vindu høyde
      var elementTop = reveals[i].getBoundingClientRect().top; // distanse fra toppen av nettsiden
      var elementVisible = 300; // Hvilken høyde før det blir synlig
      // Set classen status avhengig av om den skal være synlig
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  