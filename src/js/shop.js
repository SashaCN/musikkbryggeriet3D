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
    basketPopup = document.querySelector(".basket-popup")

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
    lineLeft(event, lineS, switchWidth)
  }

  function rightS (event){
    lineRight(event, lineS, lineSWidth, switchWidth)
  }

  switches.forEach((elem)=>{
    elem.onclick = ()=>{
      console.log(objects[elem.getAttribute("data-switch-number")].offsetLeft)
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
  lineLeft(event, line, objectWidth)
}

function right (event){
  lineRight(event, line, lineWidth, objectWidth)
}

//basket popup 
basketButton.onclick = basketOpen

function basketOpen (event){
  popupOpen (event, basketPopup)
}