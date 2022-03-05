// state
const gameState = {
  players: ['x', 'o'],
  
}

function buildInitialState() {

}

// render
function renderState() {

}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onBoardClick() {
  // update state, maybe with another dozen or so helper functions...

  renderState() // show the user the new state
}
const board = document.getElementById('board');
board.addEventListener('click', onBoardClick); // etc

function tick() {
    // this is an incremental change that happens to the state every time you update...
  
    renderState()
  }
  
  // now you might have things like
  document.addEventListener('keydown', function (event) {
    // here you might read which key was pressed and update the state accordingly
  })

  