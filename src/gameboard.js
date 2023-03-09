function gameboard() {
  const container = document.createElement('div')
  container.classList.add('gameboard')
  container.dataset.knight = false
  container.dataset.end = false
  for(let i = 0; i < 8; i++) {
    const row = document.createElement('div')
    row.classList.add(`row:${i}`)
    for(let j = 0; j < 8; j++) {
      const cell= document.createElement('div')
      cell.classList.add('cell')
      cell.dataset.row = i
      cell.dataset.column = j
      if(i%2 === 0) {
        if(j%2 === 0) {
          cell.classList.add('white')
        } else cell.classList.add('black')
      }else {
        if(j%2===0) {
          cell.classList.add('black')
        } else cell.classList.add('white')
      }
      row.appendChild(cell)
    }
    container.appendChild(row)
  }
  return container
}

function getStart() {
  const knight = document.querySelector('.knight')
  const parentNode = knight.parentNode
  const y = parseInt(parentNode.dataset.row, 10)
  const x = parseInt(parentNode.dataset.column, 10)
  const start = [y,x]
  return start
}

function getKnight() {
  const knight = document.querySelector('.knight')
  console.log(knight)
  return knight
}

function getEnd() {
  const end = document.querySelector('[data-end-loc')
  const y = parseInt(end.dataset.row, 10)
  const x = parseInt(end.dataset.column, 10)
  const endLoc = [y,x]
 
  return endLoc
}

function getDataCell(x,y) {
  return document.querySelector(`[data-row="${x}"][data-column="${y}"]`);
}
export { gameboard, getStart, getEnd, getKnight, getDataCell}
