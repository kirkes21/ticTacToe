// State
const gameState = {
  players: ['x', 'o'],
  p1Score: 0,
  p2Score: 0,
  p1Name: '',
  p2Name: '',
  status: 'Enter name(s) and choose a mode.'
}

// Listeners
  // hide input fields
function hideInputs() {
  let nameInputs = document.getElementById("name-entry")
  nameInputs.style.display = "none"
}

function get1PName() {
  let p1Name = document.getElementById('p1NameEntry').value
  document.getElementById('p1NameDisplay').innerText = p1Name
  document.getElementById('p2NameDisplay').innerText = 'Computer'

  hideInputs()
}

function get2PNames() {
  let p1Name = document.getElementById('p1NameEntry').value
  document.getElementById('p1NameDisplay').innerText = p1Name
  let p2Name = document.getElementById('p2NameEntry').value
  document.getElementById('p2NameDisplay').innerText = p2Name
  
  hideInputs()
}
    
function start1PGame() {
  get1PName()
}

function start2PGame() {
  get2PNames()
}

// Render
function renderState() {

}

// Bring it on home
function initGame() {

}

// Go for launch
initGame()