let profile = document.querySelector(".profile"),
    profileMenu = document.querySelector(".sing-up"),
    //burger menu
    burger = document.querySelector(".burger"),
    burgerMenu = document.querySelector(".header-menu"),
    menuLine = document.querySelector(".header-line"),
    //header slider (HS)
    lineHS = document.querySelector(".photos"),
    arrLeftHS = document.querySelector(".arrow-left"),
    arrRightHS = document.querySelector(".arrow-right"),
    imgHS = document.querySelectorAll(".header-slider-img"),
    imgWidthHS = imgHS[0].getBoundingClientRect().width,
    widthHS = Math.round(lineHS.getBoundingClientRect().width),
    //about us slider 
    lineAUS = document.querySelector(".events-line"),
    arrLeftAUS = document.querySelector(".arrow-left-aus"),
    arrRightAUS = document.querySelector(".arrow-right-aus"),
    events = document.querySelectorAll(".event"),
    eventWidthAUS = events[0].getBoundingClientRect().width + 30,
    widthAUS = Math.round(lineAUS.getBoundingClientRect().width)

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
  widthAUS = Math.floor(widthAUS)
  if(lineAUS.scrollLeft == 0){
    lineAUS.scroll(lineAUS.scrollWidth, 0)
  }else{
    lineAUS.scroll(lineAUS.scrollLeft-eventWidthAUS, 0)
  }
}

function rightAUS (event){
  event.preventDefault()
  widthAUS = Math.floor(widthAUS)
  if(Math.round(lineAUS.scrollLeft)-10 <= lineAUS.scrollWidth - widthAUS && Math.round(lineAUS.scrollLeft)+10 >= lineAUS.scrollWidth - widthAUS){
    lineAUS.scroll(0, 0)
  }else{
    lineAUS.scroll(lineAUS.scrollLeft+=eventWidthAUS, 0)
  }
}