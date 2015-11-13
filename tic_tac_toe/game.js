var currentPlayer = 'one'

var body = document.querySelector('body')

var title = document.querySelector('h1')

var TL = document.querySelector('#TL')
var TM = document.querySelector('#TM')
var TR = document.querySelector('#TR')
var ML = document.querySelector('#ML')
var MM = document.querySelector('#MM')
var MR = document.querySelector('#MR')
var BL = document.querySelector('#BL')
var BM = document.querySelector('#BM')
var BR = document.querySelector('#BR')



body.addEventListener('click', function listener(event) {

  function winner() {

  if (TL.textContent === "x" && TM.textContent === "x" && TR.textContent === "x") return "one"
  if (ML.textContent === "x" && MM.textContent === "x" && MR.textContent === "x") return "one"
  if (BL.textContent === "x" && BM.textContent === "x" && BR.textContent === "x") return "one"

  if (TL.textContent === "x" && ML.textContent === "x" && BL.textContent === "x") return "one"
  if (TM.textContent === "x" && MM.textContent === "x" && BM.textContent === "x") return "one"
  if (TR.textContent === "x" && MR.textContent === "x" && BR.textContent === "x") return "one"

  if (TL.textContent === "x" && MM.textContent === "x" && BR.textContent === "x") return "one"
  if (TR.textContent === "x" && MM.textContent === "x" && BL.textContent === "x") return "one"

  if (TL.textContent === "o" && TM.textContent === "o" && TR.textContent === "o") return "two"
  if (ML.textContent === "o" && MM.textContent === "o" && MR.textContent === "o") return "two"
  if (BL.textContent === "o" && BM.textContent === "o" && BR.textContent === "o") return "two"

  if (TL.textContent === "o" && ML.textContent === "o" && BL.textContent === "o") return "two"
  if (TM.textContent === "o" && MM.textContent === "o" && BM.textContent === "o") return "two"
  if (TR.textContent === "o" && MR.textContent === "o" && BR.textContent === "o") return "two"

  if (TL.textContent === "o" && MM.textContent === "o" && BR.textContent === "o") return "two"
  if (TR.textContent === "o" && MM.textContent === "o" && BL.textContent === "o") return "two"

  }



  var tile = event.target //assigning var tile to the event target

  // to eliminate/ return non-valid action
  if (tile.className !== 'tile') return //return nothing, jump out of function.
  if (tile.textContent) return // if tile already occupied, jump of of the function

  //to determine player one or two to fill up the appropriate sign.
  if (currentPlayer === 'one') {
    tile.textContent = 'x' //put player one a "X" in the tile
    currentPlayer = 'two'
  } else {
    tile.textContent = 'o'
    currentPlayer = 'one' //if is not player one, then change to player two.
  }

 //to check if someone wins after making a move.
    var win = winner()// call the winner function.

    if(win === "one") {
      title.textContent = "Player one wins"
    } else if (win === "two") {
      title.textContent = "Player two wins"
    }
})



//Declare variable.
