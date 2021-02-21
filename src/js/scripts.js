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
    basketButton = document.querySelector(".basket"),
    basketPopup = document.querySelector(".basket-popup"),
    closeButtons = document.querySelectorAll(".close"),
    activePopup,
    //order menu
    orderProducts = document.querySelectorAll(".product"),
    productPlus = document.querySelectorAll(".product-plus"),
    productMinus = document.querySelectorAll(".product-minus"),
    productQuantify = document.querySelectorAll(".product-amount"),
    price = document.querySelectorAll(".price"),
    productPrice = document.querySelectorAll(".product-price"), // in popup
    deleteProduct = document.querySelectorAll(".delete-product"),
    productOrderInfo = document.querySelectorAll(".product-order-info"),
    sumPrice = document.querySelector(".sum-price"),
    totalPrice = 0,
    productNumber

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
  lineLeft(event, lineHS, imgWidthHS)
}

function rightHS (event){
  lineRight(event, lineHS, widthHS, imgWidthHS)
}

function falseS (){
  return false;
}

function lineLeft (event, line, scrollWidth){
  event.preventDefault()
  if(line.scrollLeft == 0){
    line.scroll(line.scrollWidth, 0)
  }else{
    line.scroll(line.scrollLeft-scrollWidth, 0)
  }
}

function lineRight (event, line, lineShowedWidth, scrollWidth){
  event.preventDefault()
  if(Math.round(line.scrollLeft)-10 <= line.scrollWidth - lineShowedWidth && Math.round(line.scrollLeft)+10 >= line.scrollWidth - lineShowedWidth){
    line.scroll(0, 0)
  }else{
    line.scroll(line.scrollLeft+=scrollWidth, 0)
  }
}

//about us slider (AUS)

arrLeftAUS.onclick = leftAUS
arrRightAUS.onclick = rightAUS
arrLeftAUS.ondblclick = falseS
arrRightAUS.ondblclick = falseS

function leftAUS (event){
  lineLeft(event, lineAUS, eventWidthAUS)
}

function rightAUS (event){
  lineRight(event, lineAUS, widthAUS, eventWidthAUS)
}

//gallery slider (GS)

arrLeftGS.onclick = leftGS
arrRightGS.onclick = rightGS
arrLeftGS.ondblclick = falseS
arrRightGS.ondblclick = falseS

function leftGS (event){
  lineLeft(event, lineGS, pictureWidthGS)
}

function rightGS (event){
  lineRight(event, lineGS, widthGS, pictureWidthGS)
}

//sponsor slider (SPS)

arrLeftSPS.onclick = leftSPS
arrRightSPS.onclick = rightSPS
arrLeftSPS.ondblclick = falseS
arrRightSPS.ondblclick = falseS

function leftSPS (event){
  lineLeft(event, lineSPS, sponsorWidthSPS)
}

function rightSPS (event){
  lineRight(event, lineSPS, widthSPS, sponsorWidthSPS)
}

//shop slider (SS)

arrLeftSS.onclick = leftSS
arrRightSS.onclick = rightSS
arrLeftSS.ondblclick = falseS
arrRightSS.ondblclick = falseS

function leftSS (event){
  lineLeft(event, lineSS, productWidthSS)
}

function rightSS (event){
  lineRight(event, lineSS, widthSS, productWidthSS)
}

//popups 

function popupOpen (event, popup){
  event.preventDefault()
  checkActivePopup()
  popup.classList.add("active-popup")
  popupBg.style.display = "block"
  activePopup = document.querySelector(".active-popup")
  popupBg.onclick = checkClick
}

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

function singUpOpen (event){
  popupOpen (event, singUpPopup)
}

singInButton.forEach((elem)=>{
  elem.onclick = singInOpen
})

function singInOpen (event){
  popupOpen (event, singInPopup)
}

forgotPasswordButton.onclick = forgotPasswordOpen

function forgotPasswordOpen (event){
  popupOpen (event, forgotPasswordPopup)
}

printerButton.onclick = printerOpen

function printerOpen (event){
  popupOpen (event, printerPopup)
}

sittingButton.onclick = sittingOpen

function sittingOpen (event){
  popupOpen (event, sittingPopup)
}

wifiButton.onclick = wifiOpen

function wifiOpen (event){
  popupOpen (event, wifiPopup)
}

printButton.onclick = printOpen

function printOpen (event){
  popupOpen (event, printPopup)
}

microwaveButton.onclick = microwaveOpen

function microwaveOpen (event){
  popupOpen (event, microwavePopup)
}

basketButton.onclick = basketOpen

function basketOpen (event){
  popupOpen (event, basketPopup)
}

//order menu 

for(i = 0; i < orderProducts.length; i++){
  orderProducts[i].dataset.productNumber = i
  productOrderInfo[i].dataset.productNumber = i
  productPrice[i].dataset.productStartingPrice = productPrice[i].textContent.slice(0, productPrice[i].textContent.length-1)
  productPrice[i].dataset.productPrice = productPrice[i].textContent.slice(0, productPrice[i].textContent.length-1)
}

productMinus.forEach((elem)=>{
  elem.onclick = prMinus
})

function prMinus (event){
  event.preventDefault()
  productNumber = this.closest(".product-order-info").getAttribute("data-product-number")
  if(this.nextElementSibling.firstChild.value > 0){
    productQuantify[productNumber].value = productQuantify[productNumber].value - 1
    productPrice[productNumber].innerHTML = `${parseInt(productPrice[productNumber].getAttribute("data-product-price")) - parseInt(productPrice[productNumber].getAttribute("data-product-starting-price"))}$`
    productPrice[productNumber].dataset.productPrice = productPrice[productNumber].textContent.slice(0, productPrice[productNumber].textContent.length-1)
    totalPriceCount()
  }else{
    return false
  }
}

productPlus.forEach((elem)=>{
  elem.onclick = prPlus
})

function prPlus (event){
  event.preventDefault()
  productNumber = this.closest(".product-order-info").getAttribute("data-product-number")
  productQuantify[productNumber].value = parseInt(productQuantify[productNumber].value) + 1
  productPrice[productNumber].innerHTML = `${parseInt(productPrice[productNumber].getAttribute("data-product-starting-price")) + parseInt(productPrice[productNumber].getAttribute("data-product-price"))}$`
  productPrice[productNumber].dataset.productPrice = productPrice[productNumber].textContent.slice(0, productPrice[productNumber].textContent.length-1)
  totalPriceCount()
}

function totalPriceCount (){
  productPrice.forEach((elem)=>{
    totalPrice = totalPrice + parseInt(elem.getAttribute("data-product-price"))
    console.log(parseInt(elem.getAttribute("data-product-price")))
  })
  sumPrice.innerHTML = `${totalPrice}$`
  totalPrice = 0
}