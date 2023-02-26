export default function gameboard() {
  const container = document.createElement('div')
  container.classList.add('gameboard')
  for(let i = 0; i < 8; i++) {
    const row = document.createElement('div')
    row.classList.add(`row:${i}`)
    for(let j = 0; j < 8; j++) {
      const cell= document.createElement('div')
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

