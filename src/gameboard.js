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
  const y = parentNode.dataset.row
  const x = parentNode.dataset.column
  const start = [y,x]
  return start
}

function getEnd() {
  const end = document.querySelector('.endLoc')
  const y = end.dataset.row
  const x = end.dataset.column
  const endLoc = [y,x]
  return endLoc
}

export { gameboard, getStart, getEnd }
