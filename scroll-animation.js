tightness = 1;
currentbg = 0;

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    console.log(" --- ")
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
    switch (maxVisible){
        case 0:
            if(currentbg != 0){
                document.getElementsByTagName("body")[0].style.backgroundImage = "url(\"images/liquid-cheese.svg\")";
                //document.getElementsByTagName("body")[0].style.backgroundSize = "cover";
                currentbg = 0;
            }
            break;
        case 1:
            if(currentbg != 1){
                document.getElementsByTagName("body")[0].style.backgroundImage = "url(\"images/bullseye-gradient.svg\")";
                //document.getElementsByTagName("body")[0].style.backgroundRepeat = "repeat";
                //document.getElementsByTagName("body")[0].style.backgroundSize = "auto";
                currentbg = 1;
            }
            break;
    }
  }
  
  window.addEventListener("scroll", reveal);
  