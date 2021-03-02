let orderProducts = document.querySelectorAll(".product"),
    productPlus = document.querySelectorAll(".product-plus"),
    productMinus = document.querySelectorAll(".product-minus"),
    productQuantify = document.querySelectorAll(".product-amount"),
    productPrice = document.querySelectorAll(".product-price"), // in popup
    deleteProduct = document.querySelectorAll(".delete-product"),
    productOrderInfo = document.querySelectorAll(".product-order-info"),
    sumPrice = document.querySelector(".sum-price"),
    basketProducts = document.querySelector(".basket-products"),
    balance = document.querySelector(".balance"),
    innerString = "",
    totalPrice = 0,
    productNumber

if(localStorage.basketContent !== undefined && localStorage.basketContent != ""){
  basketProducts.innerHTML = localStorage.basketContent
  refreshProducts ()
}if(localStorage.basketContent == ""){
  basketProducts.innerHTML = `<p class="basket-clear">Basket is clear</p>`
}

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
    productQuantify[productNumber].setAttribute("value", productQuantify[productNumber].value) 
    localStorageAdd ()
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
  productQuantify[productNumber].setAttribute("value", productQuantify[productNumber].value)
  localStorageAdd ()
  productPrice[productNumber].innerHTML = `${parseInt(productPrice[productNumber].getAttribute("data-product-starting-price")) + parseInt(productPrice[productNumber].getAttribute("data-product-price"))}$`
  productPrice[productNumber].dataset.productPrice = productPrice[productNumber].textContent.slice(0, productPrice[productNumber].textContent.length-1)
  totalPriceCount()
}

function valueChange (){
  productNumber = this.closest(".product").getAttribute("data-product-number")
  productQuantify[productNumber].setAttribute("value", productQuantify[productNumber].value)
  localStorageAdd ()
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

function refreshProducts (){
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
      localStorage.basketContent = basketProducts.innerHTML
      if(orderProducts[0] === undefined){
        basketProducts.innerHTML = `<p class="basket-clear">Basket is clear</p>`
      }
      innerString = ""
      attributeAdd()
      totalPriceCount()
      localStorage.basketPrice = balance.innerHTML
    }
  })
  localStorageAdd ()
}

function localStorageAdd (){
  localStorage.basketContent = basketProducts.innerHTML
  localStorage.basketPrice = balance.innerHTML
}