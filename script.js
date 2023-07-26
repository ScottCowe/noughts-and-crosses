const boardWidth = 3

window.onload = function() {
  const boardContainer = document.getElementById("board-container")

  for(let i = 0; i < (boardWidth*boardWidth); i++) {
    let element = document.createElement("div")
    element.classList.add("grid-item")
    element.id = i
    boardContainer.appendChild(element)
    element.addEventListener("click", () => { onGridItemClick(i, true) })
    element.addEventListener("contextmenu", (e) => {
      e.preventDefault()
      onGridItemClick(i, false)
    })
  }
}

function editGridItem(id, value) {
  let gridItem = document.getElementById(id)
  gridItem.innerHTML = value
}

function onGridItemClick(id, leftClick) {
  // Check if item should be edited
  let item = document.getElementById(id)
  if(item.innerHTML == "X" || item.innerHTML == "O") {}
  
  // If so, edit item. leftClick => "X", !leftClick => "O"
  item.innerHTML = leftClick ? "X" : "O"

  // Create board array 
  board = []
  elems = document.getElementsByClassName("grid-item")
 
  for(let i = 0; i < boardWidth*boardWidth; i++) {
    board.push(elems[i].innerHTML)
  }

  // Check for move result
  const result = getMoveResult(board)
  let resultHeader = document.getElementById("result")
  resultHeader.innerHTML = "Result: " + result
}

function allElementsMatch(array) {
  let firstValue = array[0]
  for(let i = 0; i < array.length; i++) {
    if(firstValue != array[i]) {
      return false
    }
  }

  return true
}

function getMoveResult(board) {
// 0 => Continue, 1 => Noughts win, 2 => Crosses win, 3 => Draw
}
