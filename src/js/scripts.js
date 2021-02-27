let //header slider (HS)
    lineHS = document.querySelector(".photos"),
    arrLeftHS = document.querySelector(".arrow-left"),
    arrRightHS = document.querySelector(".arrow-right"),
    imgHS = document.querySelectorAll(".header-slider-img"),
    imgWidthHS = imgHS[0].getBoundingClientRect().width,
    widthHS = Math.round(lineHS.getBoundingClientRect().width),
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
    addProductButton = document.querySelectorAll(".product-button"),
    productName = document.querySelectorAll(".product-name"),
    basketProducts = document.querySelector(".basket-products"),
    shopProducts = document.querySelectorAll(".shop-product"),
    productImg = document.querySelectorAll(".shop-product img"),
    balance = document.querySelector(".balance"),
    innerString = "",
    totalPrice = 0,
    productNumber

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

function attributeAdd (){
  for(let i = 0; i < orderProducts.length; i++){
    orderProducts[i].dataset.productNumber = i
    productPrice[i].dataset.productStartingPrice = productPrice[i].textContent.slice(0, productPrice[i].textContent.length-1)
    productPrice[i].dataset.productPrice = productPrice[i].textContent.slice(0, productPrice[i].textContent.length-1)
  }
}

function prMinus (event){
  event.preventDefault()
  productNumber = this.closest(".product").getAttribute("data-product-number")
  if(productQuantify[productNumber].value > 0){
    productQuantify[productNumber].value = productQuantify[productNumber].value - 1
    productPrice[productNumber].innerHTML = `${parseInt(productPrice[productNumber].getAttribute("data-product-price")) - parseInt(productPrice[productNumber].getAttribute("data-product-starting-price"))}$`
    productPrice[productNumber].dataset.productPrice = productPrice[productNumber].textContent.slice(0, productPrice[productNumber].textContent.length-1)
    totalPriceCount()
  }else{
    return false
  }
}

function prPlus (event){
  event.preventDefault()
  productNumber = this.closest(".product").getAttribute("data-product-number")
  productQuantify[productNumber].value = parseInt(productQuantify[productNumber].value) + 1
  productPrice[productNumber].innerHTML = `${parseInt(productPrice[productNumber].getAttribute("data-product-starting-price")) + parseInt(productPrice[productNumber].getAttribute("data-product-price"))}$`
  productPrice[productNumber].dataset.productPrice = productPrice[productNumber].textContent.slice(0, productPrice[productNumber].textContent.length-1)
  totalPriceCount()
}

function valueChange (){
  productNumber = this.closest(".product").getAttribute("data-product-number")
  productPrice[productNumber].innerHTML = `${parseInt(productPrice[productNumber].getAttribute("data-product-starting-price")) * this.value}$`
  productPrice[productNumber].dataset.productPrice = productPrice[productNumber].textContent.slice(0, productPrice[productNumber].textContent.length-1)
  totalPriceCount()
}

function totalPriceCount (){
  productPrice = document.querySelectorAll(".product-price")
  productPrice.forEach((elem)=>{
    totalPrice += parseInt(elem.getAttribute("data-product-price"))
  })
  sumPrice.innerHTML = `${totalPrice}$`
  balance.innerHTML = `${totalPrice}$`
  totalPrice = 0
}

addProductButton.forEach((elem)=>{
  elem.onclick = addProduct
})

for(let i = 0; i < shopProducts.length; i++){
  shopProducts[i].dataset.productNumber = i
}

function addProduct (event){
  event.preventDefault()
  productNumber = this.closest(".shop-product").getAttribute("data-product-number")
  
  basketProducts.innerHTML = ""
  if(orderProducts[0] === undefined){
    basketProducts.innerHTML = `<figure class="product">${productImg[productNumber].outerHTML}<figcaption> <p class="product-name">${productName[productNumber].textContent}</p><div class="product-info"><div class="product-description"> <p>size - L</p><p>for women</p></div><div class="product-order-info"> <form class="product-quantity"> <button class="product-minus">-</button><label><input class="product-amount" type="number" name="product-quantity" value="1"/></label><button class="product-plus">+</button></form><div class="price-wrap"> <p class="product-price">${price[productNumber].textContent}</p><span class="delete-product"></span></div></div></div></figcaption></figure>`
  }else{
    for(let i = 0; i < orderProducts.length; i++){
      innerString = `${innerString}${orderProducts[i].outerHTML}`
    }
    basketProducts.innerHTML = `${innerString}<figure class="product">${productImg[productNumber].outerHTML}<figcaption> <p class="product-name">${productName[productNumber].textContent}</p><div class="product-info"><div class="product-description"> <p>size - L</p><p>for women</p></div><div class="product-order-info"> <form class="product-quantity"> <button class="product-minus">-</button><label><input class="product-amount" type="number" name="product-quantity" value="1"/></label><button class="product-plus">+</button></form><div class="price-wrap"> <p class="product-price">${price[productNumber].textContent}</p><span class="delete-product"></span></div></div></div></figcaption></figure>`
    innerString = ""
  }

  orderProducts = document.querySelectorAll(".product")
  productPlus = document.querySelectorAll(".product-plus")
  productMinus = document.querySelectorAll(".product-minus")
  productQuantify = document.querySelectorAll(".product-amount")
  productPrice = document.querySelectorAll(".product-price") // in popup
  deleteProduct = document.querySelectorAll(".delete-product")
  productOrderInfo = document.querySelectorAll(".product-order-info")
  deleteProduct = document.querySelectorAll(".delete-product")

  attributeAdd()
  totalPriceCount()

  productPlus.forEach((elem)=>{
    elem.onclick = prPlus
  })
  productMinus.forEach((elem)=>{
    elem.onclick = prMinus
  })
  productQuantify.forEach((elem)=>{
    elem.onchange = valueChange
  })
  deleteProduct.forEach((elem)=>{
    elem.onclick = (event)=>{
      event.preventDefault()
      basketProducts.removeChild(orderProducts[elem.closest(".product").getAttribute("data-product-number")])
      orderProducts = document.querySelectorAll(".product")
      if(orderProducts[0] === undefined){
        basketProducts.innerHTML = `<p class="basket-clear">Basket is clear</p>`
      }
      innerString = ""
      attributeAdd()
      totalPriceCount()
    }
  })
}
