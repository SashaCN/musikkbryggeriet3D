let screenWidth = document.body.getBoundingClientRect().width,      //screen width for adaptive
    //profile
    profile = document.querySelector(".profile"),
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
    widthAUS = Math.round(lineAUS.getBoundingClientRect().width),
    //video slider (VS)
    links = ["https://www.youtube.com/embed/qv714UBCVg4", "https://www.youtube.com/embed/2J8GMl8Tv0c"],
    arrLeftVS = document.querySelector(".arrow-left-video"),
    arrRightVS = document.querySelector(".arrow-right-video"),
    video = document.querySelector(".yt-video"),
    //shop slider (SS)
    lineSS = document.querySelector(".shop-products"),
    arrLeftSS = document.querySelector(".arrow-left-shop"),
    arrRightSS = document.querySelector(".arrow-right-shop"),
    products = document.querySelectorAll(".shop-product"),
    productWidthSS = products[0].getBoundingClientRect().width + 30,
    widthSS = Math.round(lineSS.getBoundingClientRect().width)

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

//video slider 

arrLeftVS.onclick = leftVideo
arrRightVS.onclick = rightVideo

function leftVideo (){
  for(i = 0; i < links.length; i++){
    if(video.getAttribute("src") == links[i] && i > 0){
      video.setAttribute("src", links[i-1])
      break
    }else if(video.getAttribute("src") == links[i] && i == 0){
      video.setAttribute("src", links[links.length-1])
      break
    }
  }
}

function rightVideo (){
  for(i = 0; i < links.length; i++){
    if(video.getAttribute("src") == links[i] && i < links.length-1){
      video.setAttribute("src", links[i+1])
      break
    }else if(video.getAttribute("src") == links[i] && i == links.length-1){
      video.setAttribute("src", links[0])
      break
    }
  }
}

//shop slider (SS)

arrLeftSS.onclick = leftSS
arrRightSS.onclick = rightSS
arrLeftSS.ondblclick = falseS
arrRightSS.ondblclick = falseS

function leftSS (event){
  event.preventDefault()
  widthSS = Math.floor(widthSS)
  if(lineSS.scrollLeft == 0){
    lineSS.scroll(lineSS.scrollWidth, 0)
  }else{
    lineSS.scroll(lineSS.scrollLeft-productWidthSS, 0)
  }
}

function rightSS (event){
  event.preventDefault()
  widthSS = Math.floor(widthSS)
  if(Math.round(lineSS.scrollLeft)-10 <= lineSS.scrollWidth - widthSS && Math.round(lineSS.scrollLeft)+10 >= lineSS.scrollWidth - widthSS){
    lineSS.scroll(0, 0)
  }else{
    lineSS.scroll(lineSS.scrollLeft+=productWidthSS, 0)
  }
}