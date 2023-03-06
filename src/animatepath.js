import {getStart} from './gameboard';

let animatePath = path => {
  let timeout = 0;
  let totalX = 0;
  let totalY = 0;
  let newCell

  let animate = () => {
    getStart().styleSheet.transform =`translateY(${totalY}px) translateX(${totalX}px)`;
  }

  for(let i = 0; i <path.length -1; i++) {
    let animY = path[i][0] > path[i + 1][0]
      ? (path[i][0] - path[i + 1][0]) * 100
      : -Math.abs((path[i + 1][0] - path[i][0]) * 100);
    totalY += animY
    animate()

    let animX =
    path[i][1] > path[i + 1][1]
      ? -Math.abs((path[i][1] - path[i + 1][1]) * 100)
      : (path[i + 1][1] - path[i][1]) * 100;
    totalY += animX;
    newCell = getDataCell(path[i + 1][0], path[i + 1][1]);
    animate(timecount, totalX, totalY, newCell, i);
    timecount += 301;
  }
}

export { animatePath }