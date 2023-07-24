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
  // Horizontal
  // 0, 1, 2 or 3, 4, 5 or 6, 7, 8
  // Check if X or O
  // if i == i+1 == i+2
  // i => 0, 3, 6 => 0, 1*3, 2*3
  //
  // 0*bw -> 1*bw -1 or 1*bw -> 2*bw -1 or 2*bw -> 3*bw -1 or ... or (bw-1)*bw -> bw*bw -1
  // i => 0 ... bw-1 
  // i*bw -> (i+1)*bw -1
  //
  // for i from 0 to boardWidth-1 
  //   slice = []
  //   for j from i*bw to (i+1)*bw -1
  //     slice.push(j) 
  //   if allElementsMatch(slice)
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
  // i => 0, bw-1
  // i*(bw+1), i*(bw+1), i*(bw+1), ..., i*(bw+1) or i*(bw-1) + (bw-1), i*(bw-1) + (bw-1), i*(bw-1) + (bw-1), ..., i*(bw-1) + (bw-1)
  // for i from 0 to bw-1
  //   slice = []
  //   slice.push(i*(bw+1))
  //   slice2 = []
  //   slice2.push(i*(bw-1) + (bw-1))
  //   if allElementsMatch(slice) or slice2 all match 


  // Draw => If board full
  // for i from 0 to boardWidth*boardWidth
  //   if board[i] == ""
  //     return 3

  // Continue => None of the above

  // 0 => Continue, 1 => Noughts win, 2 => Crosses win, 3 => Draw

  for(let i = 0; i < boardWidth-1; i++) {
    // Horizontal
    let horizontalSlice = []
    for(let j = i*boardWidth; i < (i+1)*boardWidth - 1; j++) {
      horizontalSlice.push(board[j])
    }

    // Vertical
    let verticalSlice = []
    for(let j = 0; j < boardWidth-1; j++) {
      verticalSlice.push(j*boardWidth + i)
    }

    // Diagonal
    let descendingDiagonalSlice = []
    descendingDiagonalSlice.push(i*(boardWidth+1))
    let ascendingDiagonalSlice = []
    ascendingDiagonalSlice.push(i*(boardWidth-1) + (boardWidth-1))

    // Check if game won
    let slices = [horizontalSlice, verticalSlice, descendingDiagonalSlice, ascendingDiagonalSlice]
    for(let i = 0; i < slices.length; i++) {
      let slice = slices[i]
      if(allElementsMatch(slice)) {
        switch(slice[0]) {
          case "X":
            return 1;
          case "O":
            return 2;
        }
      }
    }
  }

  // Check if draw
  let draw = true
  for(let i = 0; i < boardWidth*boardWidth; i++) {
    if(board[i] == "") {
      draw = false
    }
  }

  if(draw) {
    return 3
  }

  // Continue
  return 0
}
