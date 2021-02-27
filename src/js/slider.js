let line = document.querySelector(".js-slider-line"),
    arrRight = document.querySelector(".js-arrow-right"),
    arrLeft = document.querySelector(".js-arrow-left"),
    objects = document.querySelectorAll(".js-slider-object"),
    objectWidth = objects[0].getBoundingClientRect().width,
    lineWidth = Math.round(line.getBoundingClientRect().width)

//about us slider ()

arrLeft.onclick = left
arrRight.onclick = right
arrLeft.ondblclick = falseS
arrRight.ondblclick = falseS

function left (event){
  lineLeft(event, line, objectWidth)
}

function right (event){
  lineRight(event, line, lineWidth, objectWidth)
}