let arrRight = document.querySelector(".js-arrow-right"),
    arrLeft = document.querySelector(".js-arrow-left")

//about us slider ()

arrLeft.onclick = left
arrRight.onclick = right
arrLeft.ondblclick = falseS
arrRight.ondblclick = falseS

function left (event){
  lineLeft(event, ".js-slider-line", ".js-slider-object", 0)
}

function right (event){
  lineRight(event, ".js-slider-line", ".js-slider-object", 0)
}