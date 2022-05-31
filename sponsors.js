window.addEventListener("load", () => {
  // (B) GET HTML ELEMENT
  var body = document.getElementById("loadsponsors");
  body.innerHTML = `
<AlwaysShowSection>        
    <div class="container reveal centerimgmobile allsponsors">
                <a href="andoybokogpapir.html"><img src="images/andoy-bok-og-papirhandel.png" alt="Andøy Papir og Bokhandel" class="sponsor"></a>
                <a href="jokerbleik.html"><img src="images/jokerbleik.png" alt="Joker Bleik" class="sponsor"></a>
                <a href="polyalkemi.html"><img src="images/polyalkemi.png" alt="Poly Alkemi" class="sponsor"></a>
                <a href="andoyenergi.html"><img src="images/andoyenergi.png" alt="Andøy Energi" class="sponsor"></a>

    </div>
    </AlwaysShowSection>
    <AlwaysShowSection>   
    <div class="container reveal centerimgmobile allsponsors">
    <a href="hobbyking.html"><img src="images/hobbyking.png" alt="Hobbyking" class="sponsor"></a>
    <a href="elefun.html"><img src="images/elefun.png" alt="Elefun" class="sponsor"></a>
    <a href="4test.html"><img src="images/4test.png" alt="4Test" class="sponsor"></a>
    </div>
</AlwaysShowSection>
    `;
});
