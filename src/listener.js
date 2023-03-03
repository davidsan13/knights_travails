import sv from "./svg.js";
import getPath from "./controller";
export default function listener() {
  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
      if(hasKnight(e) == "true" && hasEnd(e) == "true") return
      if(hasKnight(e) == "true" && hasEnd(e) == "false") return updateEnd(e)
      
      e.target.appendChild(sv())
      updateKnight(e)
    })
  })

}

function knightSv() {
  sv()
}

function hasEnd(e) {
  const board = e.target.parentNode.parentNode
  return board.dataset.end
}

function updateEnd(e) {
  const board = e.target.parentNode.parentNode
  const cell = e.target
  cell.dataset.endLoc = true
  board.dataset.end = true
}
function hasKnight(e) {
  const board = e.target.parentNode.parentNode
  return board.dataset.knight
}

function updateKnight(e) {
  const board = e.target.parentNode.parentNode
  board.dataset.knight = true
}