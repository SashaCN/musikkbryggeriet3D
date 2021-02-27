let lineAUS = document.querySelector(".events-line"),
    arrRightAUS = document.querySelector(".arrow-right-event"),
    arrLeftAUS = document.querySelector(".arrow-left-event"),
    events = document.querySelectorAll(".event"),
    eventWidthAUS = events[0].getBoundingClientRect().width + 30,
    widthAUS = Math.round(lineAUS.getBoundingClientRect().width)

//about us slider (AUS)

arrLeftAUS.onclick = leftAUS
arrRightAUS.onclick = rightAUS
arrLeftAUS.ondblclick = falseS
arrRightAUS.ondblclick = falseS

function leftAUS (event){
  lineLeft(event, lineAUS, eventWidthAUS)
}

function rightAUS (event){
  lineRight(event, lineAUS, widthAUS, eventWidthAUS)
}