let screenWidth = document.body.getBoundingClientRect().width,      //screen width for adaptive
    //profile
    profile = document.querySelector(".profile"),
    profileMenu = document.querySelector(".sing-menu"),
    //burger menu
    burger = document.querySelector(".burger"),
    burgerMenu = document.querySelector(".header-menu"),
    menuLine = document.querySelector(".adaptive-header-line"),
    //header slider (HS)
    lineHS = document.querySelector(".photos"),
    arrLeftHS = document.querySelector(".arrow-left"),
    arrRightHS = document.querySelector(".arrow-right"),
    imgHS = document.querySelectorAll(".header-slider-img"),
    imgWidthHS = imgHS[0].getBoundingClientRect().width,
    widthHS = Math.round(lineHS.getBoundingClientRect().width),
    //about us slider (AUS)
    lineAUS = document.querySelector(".events-line"),
    arrLeftAUS = document.querySelector(".arrow-left-aus"),
    arrRightAUS = document.querySelector(".arrow-right-aus"),
    events = document.querySelectorAll(".event"),
    eventWidthAUS = events[0].getBoundingClientRect().width + 30,
    widthAUS = Math.round(lineAUS.getBoundingClientRect().width),
    //gallery slider (GS)
    lineGS = document.querySelector(".gallery-line"),
    arrLeftGS = document.querySelector(".arrow-left-gallery"),
    arrRightGS = document.querySelector(".arrow-right-gallery"),
    pictures = document.querySelectorAll(".scrolled-picture"),
    pictureWidthGS = pictures[0].getBoundingClientRect().width + 12,
    widthGS = Math.round(lineGS.getBoundingClientRect().width),
    //sponsor slider (SPS)
    lineSPS = document.querySelector(".sponsor"),
    arrLeftSPS = document.querySelector(".arrow-left-sp"),
    arrRightSPS = document.querySelector(".arrow-right-sp"),
    sponsors = document.querySelectorAll(".sponsor-img-wrap"),
    sponsorWidthSPS = sponsors[0].getBoundingClientRect().width,
    widthSPS = Math.round(lineSPS.getBoundingClientRect().width),
    //shop slider (SS)
    lineSS = document.querySelector(".shop-products"),
    arrLeftSS = document.querySelector(".arrow-left-shop"),
    arrRightSS = document.querySelector(".arrow-right-shop"),
    products = document.querySelectorAll(".shop-product"),
    productWidthSS = products[0].getBoundingClientRect().width + 30,
    widthSS = Math.round(lineSS.getBoundingClientRect().width),
    //popups 
    popupBg = document.querySelector(".popup-bg"),
    singUpButton = document.querySelectorAll(".sing-up-button"),
    singUpPopup = document.querySelector(".sing-up"),
    singInButton = document.querySelectorAll(".sing-in-button"),
    singInPopup = document.querySelector(".sing-in"),
    forgotPasswordButton = document.querySelector(".forgot-password-button"),
    forgotPasswordPopup = document.querySelector(".forgot-password"),
    printerButton = document.querySelector(".service-3d-printer"),
    printerPopup = document.querySelector(".printer-popup"),
    sittingButton = document.querySelector(".service-sitting"),
    sittingPopup = document.querySelector(".sittig-popup"),
    wifiButton = document.querySelector(".service-wifi"),
    wifiPopup = document.querySelector(".wifi-popup"),
    printButton = document.querySelector(".service-print"),
    printPopup = document.querySelector(".print-popup"),
    microwaveButton = document.querySelector(".service-microwave"),
    microwavePopup = document.querySelector(".microwave-popup"),
    closeButtons = document.querySelectorAll(".close"),
    activePopup

burger.dataset.activeCheck = "false"

burger.onclick = menu

function menu (){
  if(burger.getAttribute("data-active-check") == "false"){
    burger.dataset.activeCheck = "true"
    menuLine.classList.add("burger-menu-active")
    burgerMenu.style.display = "block"
  }else if(burger.getAttribute("data-active-check") == "true"){
    burger.dataset.activeCheck = "false"
    menuLine.classList.remove("burger-menu-active")
    burgerMenu.style.display = "none"
    burgerMenu.removeAttribute("style")
  }
} 

profile.onclick = (event) => {
  event.preventDefault()
  if(profile.classList.contains("profile-menu-active")){
    profile.classList.remove("profile-menu-active")
    profileMenu.style.display = "none"
  }else{
    profile.classList.add("profile-menu-active")
    profileMenu.style.display = "flex"
  }
}

//header slider (HS)

arrLeftHS.onclick = leftHS
arrRightHS.onclick = rightHS
arrLeftHS.ondblclick = falseS
arrRightHS.ondblclick = falseS

function leftHS (event){
  event.preventDefault()
  widthHS = Math.floor(widthHS)
  if(lineHS.scrollLeft == 0){
    lineHS.scroll(lineHS.scrollWidth, 0)
  }else{
    lineHS.scroll(lineHS.scrollLeft-imgWidthHS, 0)
  }
}

function rightHS (event){
  event.preventDefault()
  widthHS = Math.floor(widthHS)
  if(Math.round(lineHS.scrollLeft)-10 <= lineHS.scrollWidth - widthHS && Math.round(lineHS.scrollLeft)+10 >= lineHS.scrollWidth - widthHS){
    lineHS.scroll(0, 0)
  }else{
    lineHS.scroll(lineHS.scrollLeft+=imgWidthHS, 0)
  }
}

function falseS (){
  return false;
}

//about us slider (AUS)

arrLeftAUS.onclick = leftAUS
arrRightAUS.onclick = rightAUS
arrLeftAUS.ondblclick = falseS
arrRightAUS.ondblclick = falseS

function leftAUS (event){
  event.preventDefault()
  if(lineAUS.scrollLeft == 0){
    lineAUS.scroll(lineAUS.scrollWidth, 0)
  }else{
    lineAUS.scroll(lineAUS.scrollLeft-eventWidthAUS, 0)
  }
}

function rightAUS (event){
  event.preventDefault()
  if(Math.round(lineAUS.scrollLeft)-10 <= lineAUS.scrollWidth - widthAUS && Math.round(lineAUS.scrollLeft)+10 >= lineAUS.scrollWidth - widthAUS){
    lineAUS.scroll(0, 0)
  }else{
    lineAUS.scroll(lineAUS.scrollLeft+=eventWidthAUS, 0)
  }
}

//gallery slider (GS)

arrLeftGS.onclick = leftGS
arrRightGS.onclick = rightGS
arrLeftGS.ondblclick = falseS
arrRightGS.ondblclick = falseS

function leftGS (event){
  event.preventDefault()
  if(lineGS.scrollLeft == 0){
    lineGS.scroll(lineGS.scrollWidth, 0)
  }else{
    lineGS.scroll(lineGS.scrollLeft-pictureWidthGS, 0)
  }
}

function rightGS (event){
  event.preventDefault()
  if(Math.round(lineGS.scrollLeft)-10 <= lineGS.scrollWidth - widthGS && Math.round(lineGS.scrollLeft)+10 >= lineGS.scrollWidth - widthGS){
    lineGS.scroll(0, 0)
  }else{
    lineGS.scroll(lineGS.scrollLeft+=pictureWidthGS, 0)
  }
}

//sponsor slider (SPS)

arrLeftSPS.onclick = leftSPS
arrRightSPS.onclick = rightSPS
arrLeftSPS.ondblclick = falseS
arrRightSPS.ondblclick = falseS

function leftSPS (event){
  event.preventDefault()
  if(lineSPS.scrollLeft == 0){
    lineSPS.scroll(lineSPS.scrollWidth, 0)
  }else{
    lineSPS.scroll(lineSPS.scrollLeft-sponsorWidthSPS*2, 0)
  }
}

function rightSPS (event){
  event.preventDefault()
  if(Math.round(lineSPS.scrollLeft)-10 <= lineSPS.scrollWidth - widthSPS && Math.round(lineSPS.scrollLeft)+10 >= lineSPS.scrollWidth - widthSPS){
    lineSPS.scroll(0, 0)
  }else{
    lineSPS.scroll(lineSPS.scrollLeft+=sponsorWidthSPS*2, 0)
  }
}

//shop slider (SS)

arrLeftSS.onclick = leftSS
arrRightSS.onclick = rightSS
arrLeftSS.ondblclick = falseS
arrRightSS.ondblclick = falseS

function leftSS (event){
  event.preventDefault()
  if(lineSS.scrollLeft == 0){
    lineSS.scroll(lineSS.scrollWidth, 0)
  }else{
    lineSS.scroll(lineSS.scrollLeft-productWidthSS, 0)
  }
}

function rightSS (event){
  event.preventDefault()
  if(Math.round(lineSS.scrollLeft)-10 <= lineSS.scrollWidth - widthSS && Math.round(lineSS.scrollLeft)+10 >= lineSS.scrollWidth - widthSS){
    lineSS.scroll(0, 0)
  }else{
    lineSS.scroll(lineSS.scrollLeft+=productWidthSS, 0)
  }
}

//popups 

closeButtons.forEach(element => {
  element.onclick = closePopup
});

function closePopup (){
  activePopup.classList.remove("active-popup")
  popupBg.style.display = "none"
}

function checkActivePopup (){
  if(activePopup != undefined){
    activePopup.classList.remove("active-popup")
  }
}

function checkClick (e){
  if(e.target == popupBg){
    popupBg.style.display = "none"
    activePopup.classList.remove("active-popup")
  } 
}

singUpButton.forEach((elem)=>{
  elem.onclick = singUpOpen
})

singInButton.forEach((elem)=>{
  elem.onclick = singInOpen
})

function singUpOpen (event){
  event.preventDefault()
  checkActivePopup()
  singUpPopup.classList.add("active-popup")
  popupBg.style.display = "block"
  activePopup = document.querySelector(".active-popup")
  popupBg.onclick = checkClick
}

function singInOpen (event){
  event.preventDefault()
  checkActivePopup()
  singInPopup.classList.add("active-popup")
  popupBg.style.display = "block"
  activePopup = document.querySelector(".active-popup")
  popupBg.onclick = checkClick
}

forgotPasswordButton.onclick = forgotPasswordOpen

function forgotPasswordOpen (event){
  event.preventDefault()
  checkActivePopup()
  forgotPasswordPopup.classList.add("active-popup")
  popupBg.style.display = "block"
  activePopup = document.querySelector(".active-popup")
  popupBg.onclick = checkClick
}

printerButton.onclick = printerOpen

function printerOpen (event){
  event.preventDefault()
  checkActivePopup()
  printerPopup.classList.add("active-popup")
  popupBg.style.display = "block"
  activePopup = document.querySelector(".active-popup")
  popupBg.onclick = checkClick
}

sittingButton.onclick = sittingOpen

function sittingOpen (event){
  event.preventDefault()
  checkActivePopup()
  sittingPopup.classList.add("active-popup")
  popupBg.style.display = "block"
  activePopup = document.querySelector(".active-popup")
  popupBg.onclick = checkClick
}

wifiButton.onclick = wifiOpen

function wifiOpen (event){
  event.preventDefault()
  checkActivePopup()
  wifiPopup.classList.add("active-popup")
  popupBg.style.display = "block"
  activePopup = document.querySelector(".active-popup")
  popupBg.onclick = checkClick
}

printButton.onclick = printOpen

function printOpen (event){
  event.preventDefault()
  checkActivePopup()
  printPopup.classList.add("active-popup")
  popupBg.style.display = "block"
  activePopup = document.querySelector(".active-popup")
  popupBg.onclick = checkClick
}

microwaveButton.onclick = microwaveOpen

function microwaveOpen (event){
  event.preventDefault()
  checkActivePopup()
  microwavePopup.classList.add("active-popup")
  popupBg.style.display = "block"
  activePopup = document.querySelector(".active-popup")
  popupBg.onclick = checkClick
}