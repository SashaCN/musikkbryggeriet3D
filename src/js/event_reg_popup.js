let registrButton = document.querySelector(".registr"),
    registrPopup = document.querySelector(".registr-popup")

registrButton.onclick = registrOpen

function registrOpen (event){
  popupOpen (event, registrPopup)
}