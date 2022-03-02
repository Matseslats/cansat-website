function validateForm() {
    let price = "";
    event.preventDefault();
    let loc = document.forms["shipping"]["loc"].value;
    let num = document.forms["shipping"]["num"].value;
    if (loc == "") {
        price = "Posisjon må fylles ut";
    } else {
        if(loc == "Andenes"){
            price = "Kjøp på Andøy Bok & Papirhandel";
        } else if(loc == "Andoy"){
            price = "35kr";
            
        } else if(loc == "Norge"){
            if(num == 1){
                price = "65kr";
            } else if(num > 1 && num < 5){
                price = "110kr";
            } else {
                price = "Kontakt oss, eller betal 110 kr så sender vi regning på ekstra kostnader."
            }
        }
    }
    document.getElementById("shippingcost").innerHTML = price;
  } 

const form = document.querySelector('form')
form.addEventListener('submit', event => {
  // submit event detected
})