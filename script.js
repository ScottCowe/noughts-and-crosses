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

  // check for win or draw
  board = []
  elems = document.getElementsByClassName("grid-item")
 
  for(let i = 0; i < boardWidth*boardWidth; i++) {
    board.push(elems[i].innerHTML)
  }
}

function getMoveResult(board) {
  // Horizontal
  // 0, 1, 2 or 3, 4, 5 or 6, 7, 8
  // Check if X or O

  // Vertical
  // 0, 3, 6 or 1, 4, 7 or 2, 5, 8

  // Diagonal

  // Draw => If board full
  
  // Continue => None of the above

  // 0 => Continue, 1 => Noughts win, 2 => Crosses win, 3 => Draw
}
