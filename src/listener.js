import sv from "./svg.js"

export default function listener() {
  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
      if(hasKnight(e) == "true") return
      console.log('hllo')
      e.target.appendChild(sv())
      updateKnight(e)
    })
  })

}

function knightSv() {
  sv()
}

function hasKnight(e) {
  const board = e.target.parentNode.parentNode
  return board.dataset.knight
}

function updateKnight(e) {
  const board = e.target.parentNode.parentNode
  board.dataset.knight = true
}