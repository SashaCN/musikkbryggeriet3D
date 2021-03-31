let //profile
    profile = document.querySelector(".profile"),
    profileMenu = document.querySelector(".sing-menu"),
    //burger menu
    burger = document.querySelector(".burger"),
    burgerMenu = document.querySelector(".header-menu"),
    menuLine = document.querySelector(".adaptive-header-line"),
    //popups
    popupBg = document.querySelector(".popup-bg"),
    singUpButton = document.querySelectorAll(".sing-up-button"),
    singUpPopup = document.querySelector(".sing-up"),
    singInButton = document.querySelectorAll(".sing-in-button"),
    singInPopup = document.querySelector(".sing-in"),
    forgotPasswordButton = document.querySelector(".forgot-password-button"),
    forgotPasswordPopup = document.querySelector(".forgot-password"),
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
})

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

//sliders scroll

function lineLeft (event, lineName, objName, pixels){
  event.preventDefault()
  let line = document.querySelector(`${lineName}`),
      obj = document.querySelectorAll(`${objName}`),
      scrollWidth = obj[0].getBoundingClientRect().width + pixels
  if(line.scrollLeft == 0){
    line.scroll(line.scrollWidth, 0)
  }else{
    line.scroll(line.scrollLeft-scrollWidth, 0)
  }
}

function lineRight (event, lineName, objName, pixels){
  event.preventDefault()
  let line = document.querySelector(`${lineName}`),
      obj = document.querySelectorAll(`${objName}`),
      lineShowedWidth = Math.round(line.getBoundingClientRect().width),
      scrollWidth = obj[0].getBoundingClientRect().width + pixels
  if(Math.round(line.scrollLeft)-10 <= line.scrollWidth - lineShowedWidth && Math.round(line.scrollLeft)+10 >= line.scrollWidth - lineShowedWidth){
    line.scroll(0, 0)
  }else{
    line.scroll(line.scrollLeft+=scrollWidth, 0)
  }
}

function falseS (){
  return false;
}
