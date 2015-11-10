
//to determine the winning person.

var TL = document.querySelector('#TL').textContent
var TM = document.querySelector('#TM').textContent
var TR = document.querySelector('#TR').textContent
var ML = document.querySelector('#ML').textContent
var MM = document.querySelector('#MM').textContent
var MR = document.querySelector('#MR').textContent
var BL = document.querySelector('#BL').textContent
var BM = document.querySelector('#BM').textContent
var BR = document.querySelector('#BR').textContent

/*the logic behind who wins

Logic:-

all 3 row and 3 column the same
3+3+2 = 8 possibilitites
*/

function winner() {

if (TL === "x" && TM === "x" && TR === "x") return "one"
if (ML === "x" && MM === "x" && MR === "x") return "one"
if (BL === "x" && BM === "x" && BR === "x") return "one"

if (TL === "x" && ML === "x" && BL === "x") return "one"
if (TM === "x" && MM === "x" && BM === "x") return "one"
if (TR === "x" && MR === "x" && BR === "x") return "one"

if (TL === "x" && MM === "x" && BR === "x") return "one"
if (TR === "x" && MM === "x" && BL === "x") return "one"


if (TL === "o" && TM === "o" && TR === "o") return "two"
if (ML === "o" && MM === "o" && MR === "o") return "two"
if (BL === "o" && BM === "o" && BR === "o") return "two"

if (TL === "o" && ML === "o" && BL === "o") return "two"
if (TM === "o" && MM === "o" && BM === "o") return "two"
if (TR === "o" && MR === "o" && BR === "o") return "two"

if (TL === "o" && MM === "o" && BR === "o") return "two"
if (TR === "o" && MM === "o" && BL === "o") return "two"


//Declare variable.
var currentPlayer = 'one'

var body = document.querySelector('body')

var title = document.querySelector('h1')
//function run when click on body
body.addEventListener('click', function listener(event) {
  console.log(event.target) //only for debugging
  var tile = event.target //assigning var tile to the event target



  // to eliminate/ return non-valid action
  if (tile.className !== 'tile') return //return nothing, jump out of function.
  if (tile.textContent) return // jump of of the function

  //to determine player one or two to fill up the appropriate sign.
  if (currentPlayer === 'one') {
    tile.textContent = 'x' //put player one a "X" in the tile
    currentPlayer = 'two'
  } else {
    tile.textContent = 'o'
    currentPlayer = 'one' //if is not player one, then change to player two.
  }

  //insert the function
  var win = winner()
  if (win === "one") {title.textContent = "Player one wins" }
    else if (win == "two") {title.textContent = "Player two wins"}

}
