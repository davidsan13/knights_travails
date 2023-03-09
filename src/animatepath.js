import {getStart, getKnight, getDataCell} from './gameboard';

let animatePath = path => {
  let timecount = 0;
  let totalX = 0;
  let totalY = 0;
  let newCell

  let animate = (timecount, totalX, totalY, cell, i) => {
    setTimeout(() => {
      getKnight().style.transform =`translateY(${totalY}px) translateX(${totalX}px)`;
      if (cell) {
        cell.style.backgroundColor = 'grey'
        // cell.textContent = i + 1
      }
    }, timecount)
  }
  for(let i = 0; i <path.length -1; i++) {
    let animY = path[i][0] > path[i + 1][0]
      ? -Math.abs((path[i][0] - path[i + 1][0] ) * 100)
      : (path[i + 1][0] - path[i][0]) * 100;
    totalY += animY
    console.log(totalX)
    animate(timecount, totalX, totalY)
    timecount += 301

    let animX =
    path[i][1] > path[i + 1][1]
      ? (path[i + 1][1] - path[i][1]) * 100
      : Math.abs((path[i][1] - path[i + 1][1]) * 100);
    totalX += animX;
    newCell = getDataCell(path[i + 1][0], path[i + 1][1]);
    animate(timecount, totalX, totalY, newCell, i);
    timecount += 301;
  }
}

export { animatePath }