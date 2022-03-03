tightness = 1;
currentbg = 0;

function reveal() {
    // Default reveal animations
    var reveals = document.querySelectorAll(".reveal");
    var maxVisible = 0;
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight; // Få vindu høyde
      var elementTop = reveals[i].getBoundingClientRect().top; // distanse fra toppen av nettsiden
      var elementVisible = 350; // Hvilken høyde før det blir synlig
      // Set classen status avhengig av om den skal være synlig
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        maxVisible = i;
      } else {
        reveals[i].classList.remove("active");
      }
    }

    // Reveal on mobile
    if(window.screen.width < 900)
        var reveals = document.querySelectorAll(".mobilereveal");
        var maxVisible = 0;
        for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight; // Få vindu høyde
        var elementTop = reveals[i].getBoundingClientRect().top; // distanse fra toppen av nettsiden
        var elementVisible = 300; // Hvilken høyde før det blir synlig
        // Set classen status avhengig av om den skal være synlig
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            maxVisible = i;
        } else {
            reveals[i].classList.remove("active");
        }
        
    }

    var bg = document.querySelectorAll(".circles");
    if(bg.length > 0){
        switch (maxVisible){
            case 0:
                if(currentbg != 0){
                    bg[0].classList.remove("active");
                    currentbg = 0;
                }
                break;
            case 1:
                if(currentbg != 1){
                    bg[0].classList.add("active");
                    currentbg = 1;
                }
                break;
        };
    }
}
window.addEventListener("scroll", reveal);
