let line = document.querySelector(".js-slider-line"),
    arrRightMain = document.querySelector(".js-arrow-right"),
    arrLeftMain = document.querySelector(".js-arrow-left"),
    objects = document.querySelectorAll(".js-slider-object"),
    objectWidth = objects[0].getBoundingClientRect().width,
    lineWidth = Math.round(line.getBoundingClientRect().width),
    mainImg = document.querySelectorAll(".js-slider-object img"),
    //switches (S)
    lineS = document.querySelector(".additional-photo"),
    innerStringImg = "",
    //basket popup 
    basketButton = document.querySelector(".basket"),
    basketPopup = document.querySelector(".basket-popup"),
    productShopAdd = document.querySelector(".donate-button"),
    productShopPlus = document.querySelector(".button-plus"),
    productShopMinus = document.querySelector(".button-minus"),
    productShopQuantify = document.querySelector(".score input"),
    productShopPrice = document.querySelector(".product-price-on-img span"),
    productShopImg = document.querySelector(".collage img"),
    productShopName = document.querySelector(".product-section h2"),
    productShopDescription = document.querySelector(".about-us-text")

if(objects.length > 1){
  for(let i = 0; i < mainImg.length; i++){
    innerStringImg = `${innerStringImg}${mainImg[i].outerHTML}`
    mainImg[i].dataset.imgNumber = i
  }
  
  lineS.innerHTML = innerStringImg
  
  let arrRightS = document.querySelector(".switch-arrow-right"),
      arrLeftS = document.querySelector(".switch-arrow-left"),
      lineSWidth = Math.round(lineS.getBoundingClientRect().width),
      switches = document.querySelectorAll(".additional-photo img"),
      switchWidth = switches[1].getBoundingClientRect().width
  
  for(let i = 0; i < switches.length; i++){
    switches[i].dataset.switchNumber = i
  }

  if(switches.length <= 3){
    arrRightS.style.opacity = "0"
    arrLeftS.style.opacity = "0"
    if(switches.length == 2){
      for(let i = 0; i < switches.length; i++){
        switches[i].style.width = "45%"
      }
    }
  }

  arrLeftS.onclick = leftS
  arrRightS.onclick = rightS
  arrLeftS.ondblclick = falseS
  arrRightS.ondblclick = falseS

  function leftS (event){
    lineLeft(event, ".additional-photo", ".js-slider-object", 0)
  }

  function rightS (event){
    lineRight(event, ".additional-photo", ".js-slider-object", 0)
  }

  switches.forEach((elem)=>{
    elem.onclick = ()=>{
      line.scrollTo(objects[elem.getAttribute("data-switch-number")].scrollWidth * elem.getAttribute("data-switch-number"), 0)
    }
  })
}else{
  arrRightMain.style.display = "none"
  arrLeftMain.style.display = "none"
  document.querySelector(".switch-slider-line").style.display = "none"
  line.style.display = "inline-block"
  line.classList.add("alone-img")
}

//slider

arrLeftMain.onclick = left
arrRightMain.onclick = right
arrLeftMain.ondblclick = falseS
arrRightMain.ondblclick = falseS

function left (event){
  lineLeft(event, ".js-slider-line", ".js-slider-object", 0)
}

function right (event){
  lineRight(event, ".js-slider-line", ".js-slider-object", 0)
}

//basket popup 
basketButton.onclick = basketOpen

function basketOpen (event){
  popupOpen (event, basketPopup)
}



productShopAdd.onclick = productAdd 

function productAdd (event){
  event.preventDefault()
  if(orderProducts[0] === undefined){
    basketProducts.innerHTML = `<figure class="product">${productShopImg.outerHTML}<figcaption> <p class="product-name">${productShopName.textContent}</p><div class="product-info"><div class="product-description">${productShopDescription.outerHTML}</div><div class="product-order-info"> <form class="product-quantity"> <button class="product-minus">-</button><label><input class="product-amount" type="number" name="product-quantity" value="${productShopQuantify.value}"/></label><button class="product-plus">+</button></form><div class="price-wrap"> <p class="product-price">${productShopPrice.textContent.slice(0, productShopPrice.textContent.length-1)*productShopQuantify.value}$</p><span class="delete-product"></span></div></div></div></figcaption></figure>`
  }else{
    for(let i = 0; i < orderProducts.length; i++){
      innerString = `${innerString}${orderProducts[i].outerHTML}`
    }
    basketProducts.innerHTML = `${innerString}<figure class="product">${productShopImg.outerHTML}<figcaption> <p class="product-name">${productShopName.textContent}</p><div class="product-info"><div class="product-description">${productShopDescription.outerHTML}</div><div class="product-order-info"> <form class="product-quantity"> <button class="product-minus">-</button><label><input class="product-amount" type="number" name="product-quantity" value="${productShopQuantify.value}"/></label><button class="product-plus">+</button></form><div class="price-wrap"> <p class="product-price">${productShopPrice.textContent.slice(0, productShopPrice.textContent.length-1)*productShopQuantify.value}$</p><span class="delete-product"></span></div></div></div></figcaption></figure>`
    innerString = ""
  }
  refreshProducts ()
}

productShopMinus.onclick = prShopMinus

function prShopMinus (event){
  event.preventDefault()
  if(productShopQuantify.value > 0){
    productShopQuantify.value = productShopQuantify.value - 1
    productShopQuantify.setAttribute("value", productShopQuantify.value) 
  }else{
    return false
  }
}

productShopPlus.onclick = prShopPlus

function prShopPlus (event){
  event.preventDefault()
  productShopQuantify.value = parseInt(productShopQuantify.value) + 1
  productShopQuantify.setAttribute("value", productShopQuantify.value)
}