let arrRightAUS = document.querySelector(".arrow-right-event"),
    arrLeftAUS = document.querySelector(".arrow-left-event")

//about us slider (AUS)

arrLeftAUS.onclick = leftAUS
arrRightAUS.onclick = rightAUS
arrLeftAUS.ondblclick = falseS
arrRightAUS.ondblclick = falseS

function leftAUS (event){
  lineLeft(event, ".events-line", ".event-slide", 0)
}

function rightAUS (event){
  lineRight(event, ".events-line", ".event-slide", 0)
}