// State
const gameState = {
  pieces: ["X", "O"],
  p1Score: 0,
  p2Score: 0,
}

let p1Name
let p2Name

let nameDisplay = document.getElementById("nameDisplay")
nameDisplay.style.display = "none"

let scoreboard = document.getElementById("scoreboard")
scoreboard.style.display = "none"

let resetButton = document.getElementById("reset")
resetButton.style.display = "none"

let board = document.getElementById("board")
board.style.display = "none"

// Menu and start/reset game
// hide input fields
function hideInputs() {
  let nameInputs = document.getElementById("name-entry")
  nameInputs.style.display = "none"

  let buttons = document.getElementById("buttons")
  buttons.style.display = "none"

  nameDisplay.style.display = "flex"
  scoreboard.style.display = "flex"
  resetButton.style.display = "inline"
  board.style.display = "block"
}

// display P1 name and name P2 'Computer'
function get1PName() {
  p1Name = document.getElementById("p1NameEntry").value
  document.getElementById("p1NameDisplay").innerText = p1Name
  document.getElementById("p2NameDisplay").innerText = p2Name
}

// display both player names
function get2PNames() {
  p1Name = document.getElementById("p1NameEntry").value
  document.getElementById("p1NameDisplay").innerText = p1Name
  p2Name = document.getElementById("p2NameEntry").value
  document.getElementById("p2NameDisplay").innerText = p2Name
}

function start1PGame() {
  p2Name = 'Computer'
  get1PName()
  hideInputs()
  statusPlaying()
  displayScores()
  
}

function start2PGame() {
  get2PNames()
  hideInputs()
  statusPlaying()
  displayScores()
}

function statusPlaying() {
  document.getElementById("gameStatus").innerText = "Playing"
}

function displayScores() {
  document.getElementById("p1ScoreDisplay").innerText = gameState.p1Score
  document.getElementById("p2ScoreDisplay").innerText = gameState.p2Score
}

function clearBoard() {
  let rows = document.getElementsByTagName("tr")
  let cells

  for (let i = 0; i < rows.length; i++) {
    cells = rows[i].getElementsByTagName("td")
    for (let k = 0; k < cells.length; k++) {
      cells[k].innerText = ""
    }
  }
}

function resetGame() {
  statusPlaying()
  clearBoard()
  gameState.pieces = ["X", "O"]
  document.getElementById('board').style.pointerEvents = 'auto'
}

// Board Listeners
function switchPlayers() {
  gameState.pieces.reverse()
}

function gameTie() {
  document.getElementById("gameStatus").innerText = "Tie..."
}

function checkTie() {
  let rows = document.getElementsByTagName("tr")
  let cells
  let result = true

  for (let i = 0; i < rows.length; i++) {
    cells = rows[i].getElementsByTagName("td")
    for (let k = 0; k < cells.length; k++) {
      if (cells[k].innerText === "") {
        result = false
      }
    }
  }
  if (result === true) {
    gameTie()
  }
}

function p1Wins() {
  document.getElementById("gameStatus").innerText = `${p1Name} wins!`
  gameState.p1Score++
  displayScores()
  document.getElementById('board').style.pointerEvents = 'none'
}

function p2Wins() {
  document.getElementById("gameStatus").innerText = `${p2Name} wins!`
  gameState.p2Score++
  displayScores()
  document.getElementById('board').style.pointerEvents = 'none'
}

function checkWin(cellGroup) {
  let p1Win = true

  for (i = 0; i < cellGroup.length; i++) {
    if (cellGroup[i].innerText !== "X") {
      p1Win = false
      break
    }
  }
  if (p1Win) {
    p1Wins()
  }

  let p2Win = true

  for (i = 0; i < cellGroup.length; i++) {
    if (cellGroup[i].innerText !== "O") {
      p2Win = false
      break
    }
  }
  if (p2Win) {
    p2Wins()
  }
}

function checkAllWins() {
  let row1 = document.getElementsByClassName("row1")
  let row2 = document.getElementsByClassName("row2")
  let row3 = document.getElementsByClassName("row3")
  let col1 = document.getElementsByClassName("col1")
  let col2 = document.getElementsByClassName("col2")
  let col3 = document.getElementsByClassName("col3")
  let diag1 = document.getElementsByClassName("diag1")
  let diag2 = document.getElementsByClassName("diag2")

  checkWin(row1)
  checkWin(row2)
  checkWin(row3)
  checkWin(col1)
  checkWin(col2)
  checkWin(col3)
  checkWin(diag1)
  checkWin(diag2)
}

function checkCell(cell) {
  if (cell.innerText === "") {
    cell.innerText = gameState.pieces[0]
    switchPlayers()
    checkTie()
    checkAllWins()
  }
}

// drafts
