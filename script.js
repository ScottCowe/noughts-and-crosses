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
}

function getMoveResult(board) {
  // Horizontal
  // 0, 1, 2 or 3, 4, 5 or 6, 7, 8
  // Check if X or O
  // if i == i+1 == i+2
  // i => 0, 3, 6 => 0, 1*3, 2*3
  //
  // 0*bw -> 1*bw -1 or 1*bw -> 2*bw -1 or 2*bw -> 3*bw -1 or ... or (bw-1)*bw -> bw*bw -1
  // for i from 0 to boardWidth-1 
  //   slice = []
  //   for j from 0 to bw-1
  //     slice.push() 
  //     TODO: Fix this shit ^^^
  //   if allElementsMatch(from: i*bw, to: (i+1)*bw -1)
  //     check winner

  // Vertical
  // 0, 3, 6 or 1, 4, 7 or 2, 5, 8
  // i => 0, 1, 2
  // if i == i+3 == i+6
  // 
  // 0*bw, 1*bw, 2*bw or 0*bw +1, 1*bw +1, 2*bw +1 or ... or (0 -> bw-1)*bw + i 
  // for i from 0 to boardWidth-1
  //   slice = []
  //   for j from 0 to bw-1
  //     slice.push(j*bw + i)
  //   if allElementsMatch(slice)
  //     check winner

  // Diagonal
  // 00, 11, 22 or 20, 11, 02 => 0, 4, 8 or 2, 4, 6
  // 
  // 0*(bw+1), 1*(bw+1), 2*(bw+1), ..., (bw-1)(bw+1) or 0*(bw-1) + (bw-1), 1*(bw-1) + (bw-1), 2*(bw-1) + (bw-1), ..., (bw-1)*(bw-1) + (bw-1)

  // Draw => If board full
  
  // Continue => None of the above

  // 0 => Continue, 1 => Noughts win, 2 => Crosses win, 3 => Draw
}
