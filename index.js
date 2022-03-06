// State
const gameState = {
  pieces: ['X', 'O'],
  p1Score: 0,
  p2Score: 0,
}

// Menu and start/reset game
  // hide input fields
function hideInputs() {
  let nameInputs = document.getElementById("name-entry")
  nameInputs.style.display = "none"

  let buttons = document.getElementById("buttons")
  buttons.style.display = "none"
}

  // display P1 name and name P2 'Computer'
function get1PName() {
  let p1Name = document.getElementById('p1NameEntry').value
  document.getElementById('p1NameDisplay').innerText = p1Name
  document.getElementById('p2NameDisplay').innerText = 'Computer'
}

  // display both player names
function get2PNames() {
  let p1Name = document.getElementById('p1NameEntry').value
  document.getElementById('p1NameDisplay').innerText = p1Name
  let p2Name = document.getElementById('p2NameEntry').value
  document.getElementById('p2NameDisplay').innerText = p2Name
}

function start1PGame() {
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
  document.getElementById('gameStatus').innerText = 'Playing'
}

function displayScores() {
  document.getElementById('p1ScoreDisplay').innerText = gameState.p1Score
  document.getElementById('p2ScoreDisplay').innerText = gameState.p2Score
}

function clearBoard() {
  let rows = document.getElementsByTagName('tr')
  let cells
  
  for (let i = 0; i < rows.length; i++) {
      cells = rows[i].getElementsByTagName('td')
      for (let k = 0; k < cells.length; k++)
      {cells[k].innerText = ''}
  }
}

function resetGame() {
  statusPlaying()
  clearBoard()
  gameState.pieces = ['X', 'O']
}

// Board Listeners
function switchPlayers() {
  gameState.pieces.reverse()
}

function gameTie() {
  document.getElementById('gameStatus').innerText = 'Tie...'
}

function checkTie() {
  let rows = document.getElementsByTagName('tr')
  let cells
  let result = true
  
  for (let i = 0; i < rows.length; i++) {
      cells = rows[i].getElementsByTagName('td')
      for (let k = 0; k < cells.length; k++)
      {
          if (cells[k].innerText === '') {
            result = false
          }
      }
  }
  if(result === true) {
    gameTie()
  }
}



function checkCell(cell) {
 if(cell.innerText === '') {
   cell.innerText = gameState.pieces[0]
   switchPlayers()
   checkTie()
 }
}

