let animatePath = path => {
  let timeout = 0;
  let totalX = 0;
  let totalY = 0;
  let newCell

  let animate = () => {
    styleSheet.transform =`translateY(${totalY}px) translateX(${totalX}px)`;
  }

  for(let i = 0; i <path.length -1; i++) {
    let animY = path[i][0] > path[i + 1][0]
      ? (path[i][0] - path[i + 1][0]) * 100
      : -Math.abs((path[i + 1][0] - path[i][0]) * 100);
    totalY += animY
    animate()
  }
}

export { animatePath }