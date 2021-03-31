let //header slider (HS)
    arrLeftHS = document.querySelector(".arrow-left"),
    arrRightHS = document.querySelector(".arrow-right"),
    //gallery slider (GS)
    arrLeftGS = document.querySelector(".arrow-left-gallery"),
    arrRightGS = document.querySelector(".arrow-right-gallery"),
    //sponsor slider (SPS)
    arrLeftSPS = document.querySelector(".arrow-left-sp"),
    arrRightSPS = document.querySelector(".arrow-right-sp"),
    //shop slider (SS)
    arrLeftSS = document.querySelector(".arrow-left-shop"),
    arrRightSS = document.querySelector(".arrow-right-shop"),
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
    imgButton = document.querySelectorAll(".scrolled-picture img"),
    imgPopup = document.querySelector(".full-img-popup"),
    //order menu
    price = document.querySelectorAll(".price"),
    addProductButton = document.querySelectorAll(".product-button"),
    productName = document.querySelectorAll(".product-name"),
    shopProducts = document.querySelectorAll(".shop-product"),
    productImg = document.querySelectorAll(".shop-product img"),
    productDescription = document.querySelectorAll(".product-card-description")

//header slider (HS)

arrLeftHS.onclick = leftHS
arrRightHS.onclick = rightHS
arrLeftHS.ondblclick = falseS
arrRightHS.ondblclick = falseS

function leftHS (event){
  lineLeft(event, ".photos", ".header-slider-img", 0)
}

function rightHS (event){
  lineRight(event, ".photos", ".header-slider-img", 0)
}

//gallery slider (GS)

arrLeftGS.onclick = leftGS
arrRightGS.onclick = rightGS
arrLeftGS.ondblclick = falseS
arrRightGS.ondblclick = falseS

function leftGS (event){
  lineLeft(event, ".gallery-line", ".scrolled-picture", 12)
}

function rightGS (event){
  lineRight(event, ".gallery-line", ".scrolled-picture", 12)
}

//sponsor slider (SPS)

arrLeftSPS.onclick = leftSPS
arrRightSPS.onclick = rightSPS
arrLeftSPS.ondblclick = falseS
arrRightSPS.ondblclick = falseS

function leftSPS (event){
  lineLeft(event, ".sponsor", ".sponsor-img-wrap", 0)
}

function rightSPS (event){
  lineRight(event, ".sponsor", ".sponsor-img-wrap", 0)
}

//shop slider (SS)

arrLeftSS.onclick = leftSS
arrRightSS.onclick = rightSS
arrLeftSS.ondblclick = falseS
arrRightSS.ondblclick = falseS

function leftSS (event){
  lineLeft(event, ".shop-products", ".shop-product", 30)
}

function rightSS (event){
  lineRight(event, ".shop-products", ".shop-product", 30)
}

//popups 

imgButton.forEach((elem)=>{
  elem.onclick = function (){
    popupOpen(event, imgPopup)
    imgPopup.innerHTML = `<img src="${this.getAttribute('src')}" alt="${this.getAttribute('alt')}">`
  }
})

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
    basketProducts.innerHTML = `<figure class="product product-for-js">${productImg[productNumber].outerHTML}<figcaption> <p class="product-name">${productName[productNumber].textContent}</p><div class="product-info"><div class="product-description">${productDescription[productNumber].outerHTML}</div><div class="product-order-info"> <form class="product-quantity"> <button class="product-minus">-</button><label><input class="product-amount" type="number" name="product-quantity" value="1"/></label><button class="product-plus">+</button></form><div class="price-wrap"> <p class="product-price">${price[productNumber].textContent}</p><span class="delete-product"></span></div></div></div></figcaption></figure>`
  }else{
    for(let i = 0; i < orderProducts.length; i++){
      innerString = `${innerString}${orderProducts[i].outerHTML}`
    }
    basketProducts.innerHTML = `${innerString}<figure class="product product-for-js">${productImg[productNumber].outerHTML}<figcaption> <p class="product-name">${productName[productNumber].textContent}</p><div class="product-info"><div class="product-description">${productDescription[productNumber].outerHTML}</div><div class="product-order-info"> <form class="product-quantity"> <button class="product-minus">-</button><label><input class="product-amount" type="number" name="product-quantity" value="1"/></label><button class="product-plus">+</button></form><div class="price-wrap"> <p class="product-price">${price[productNumber].textContent}</p><span class="delete-product"></span></div></div></div></figcaption></figure>`
    innerString = ""
  }
  refreshProducts ()
  
}