// State
const gameState = {
  players: ['x', 'o'],
  p1Score: 0,
  p2Score: 0,
}

// Listeners
  // hide input fields
function hideInputs() {
  let nameInputs = document.getElementById("name-entry")
  nameInputs.style.display = "none"

  let buttons = document.getElementById("buttons")
  buttons.style.display = "none"
}

function get1PName() {
  let p1Name = document.getElementById('p1NameEntry').value
  document.getElementById('p1NameDisplay').innerText = p1Name
  document.getElementById('p2NameDisplay').innerText = 'Computer'
}

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
}

function start2PGame() {
  get2PNames()
  hideInputs()
  statusPlaying()
}

function statusPlaying() {
  document.getElementById('gameStatus').innerText = 'playing'
}

// connect to reset button
function resetGame() {
  gameState.players = ['o', 'x']
  statusPlaying()
}
}

// Render board
function renderState() {

}

// Launch codes (top secret)
function initGame() {

}

// Go for launch
initGame()