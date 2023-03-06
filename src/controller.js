import { animatePath } from "./animatepath";
import knightSP from "./path";
import { getEnd, getStart } from "./gameboard";

export const Controller = () => {
  
  function startTravail() {
    const startBtn = document.querySelector('.start')
    startBtn.addEventListener('click', () => {
      const path = getPath()
      console.log(path)
      // animatePath(path)
    })
  }

  function getPath() {
    const start = getStart()
    
    const end = getEnd()
    console.log(start, end)
    const path = knightSP(start, end)
    
    return path
  }

  return { startTravail, getPath }
}

