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
function getPlayerNames() {
  let p1Name = document.getElementById('p1NameEntry').value
  document.getElementById('p1NameDisplay').innerText = p1Name
  document.getElementById('p2NameEntry').value
  document.getElementById('p2NameDisplay').innerText = p2Name
}

// Render
function renderState() {

}

