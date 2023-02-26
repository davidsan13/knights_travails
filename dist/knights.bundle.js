(self["webpackChunkknights_travails"] = self["webpackChunkknights_travails"] || []).push([["knights"],{

/***/ "./src/knights.js":
/*!************************!*\
  !*** ./src/knights.js ***!
  \************************/
/***/ (() => {

class Node {
  constructor(row, col, distanceFromStartPosition, previousNode) {
    this.row = row;
    this.col = col;
    this.distanceFromStartPosition = distanceFromStartPosition
    this.previousNode = previousNode
  }

  getPositionString() {
    return `${this.row}, ${this.col}`
  }
}

function knightSP(start, target) {
  const queue = [];
  const [targetRow, targetCol] = target
  const startNode = new Node(start[0], start[1], 0, null)
  queue.push(startNode)

  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    const {row, col, distanceFromStartPosition} = node
    if (row === targetRow && col === targetCol) {
      // console.log(node)
      const paths = path(node)
      return printPath(paths)
    }
    visited.add(node.getPositionString());
    for (const neighbor of getNeighbors(row, col)) {
      const [neighborRow, neighborCol] = neighbor
      if(neighborRow < 0 || neighborRow > 7 || neighborCol > 7 || neighborCol < 0) continue
      const neighborNode = new Node(neighborRow, neighborCol, distanceFromStartPosition + 1, node)

      if (visited.has(neighborNode.getPositionString())) continue

      queue.push(neighborNode)
    }
  }
}

function path(node, pat = []) {
  if(node === null) return
  path(node.previousNode, pat)
  const {row, col} = node
  pat.push([row, col])
  if(pat.length > 0) return pat
}

function printPath(paths) {
  paths.forEach(path => console.log(path))
}

const directions = [
  [2,1],
  [1,2],
  [-1,2],
  [-2,1],
  [-2,-1],
  [-1,-2],
  [1,-2],
  [2,-1]
]
function board() {
  let array = []
  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      array.push([i,j])
    }
  }
  return array
}

function getNeighbors(row, col) {
  const moves = []
  directions.forEach(item => {
    const [rowChange, colChange] = item
    const neighborRow = row + rowChange;
    const neighborCol = col + colChange;

    moves.push([neighborRow, neighborCol])
  })
  // console.log(moves)
  return moves
}


const cell = [0,0]
const target = [3,3]
const moves = knightSP(cell, target)


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/knights.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia25pZ2h0cy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVMsSUFBSSxTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQ0FBcUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzX3RyYXZhaWxzLy4vc3JjL2tuaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTm9kZSB7XHJcbiAgY29uc3RydWN0b3Iocm93LCBjb2wsIGRpc3RhbmNlRnJvbVN0YXJ0UG9zaXRpb24sIHByZXZpb3VzTm9kZSkge1xyXG4gICAgdGhpcy5yb3cgPSByb3c7XHJcbiAgICB0aGlzLmNvbCA9IGNvbDtcclxuICAgIHRoaXMuZGlzdGFuY2VGcm9tU3RhcnRQb3NpdGlvbiA9IGRpc3RhbmNlRnJvbVN0YXJ0UG9zaXRpb25cclxuICAgIHRoaXMucHJldmlvdXNOb2RlID0gcHJldmlvdXNOb2RlXHJcbiAgfVxyXG5cclxuICBnZXRQb3NpdGlvblN0cmluZygpIHtcclxuICAgIHJldHVybiBgJHt0aGlzLnJvd30sICR7dGhpcy5jb2x9YFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24ga25pZ2h0U1Aoc3RhcnQsIHRhcmdldCkge1xyXG4gIGNvbnN0IHF1ZXVlID0gW107XHJcbiAgY29uc3QgW3RhcmdldFJvdywgdGFyZ2V0Q29sXSA9IHRhcmdldFxyXG4gIGNvbnN0IHN0YXJ0Tm9kZSA9IG5ldyBOb2RlKHN0YXJ0WzBdLCBzdGFydFsxXSwgMCwgbnVsbClcclxuICBxdWV1ZS5wdXNoKHN0YXJ0Tm9kZSlcclxuXHJcbiAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcclxuXHJcbiAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgY29uc3Qge3JvdywgY29sLCBkaXN0YW5jZUZyb21TdGFydFBvc2l0aW9ufSA9IG5vZGVcclxuICAgIGlmIChyb3cgPT09IHRhcmdldFJvdyAmJiBjb2wgPT09IHRhcmdldENvbCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgICBjb25zdCBwYXRocyA9IHBhdGgobm9kZSlcclxuICAgICAgcmV0dXJuIHByaW50UGF0aChwYXRocylcclxuICAgIH1cclxuICAgIHZpc2l0ZWQuYWRkKG5vZGUuZ2V0UG9zaXRpb25TdHJpbmcoKSk7XHJcbiAgICBmb3IgKGNvbnN0IG5laWdoYm9yIG9mIGdldE5laWdoYm9ycyhyb3csIGNvbCkpIHtcclxuICAgICAgY29uc3QgW25laWdoYm9yUm93LCBuZWlnaGJvckNvbF0gPSBuZWlnaGJvclxyXG4gICAgICBpZihuZWlnaGJvclJvdyA8IDAgfHwgbmVpZ2hib3JSb3cgPiA3IHx8IG5laWdoYm9yQ29sID4gNyB8fCBuZWlnaGJvckNvbCA8IDApIGNvbnRpbnVlXHJcbiAgICAgIGNvbnN0IG5laWdoYm9yTm9kZSA9IG5ldyBOb2RlKG5laWdoYm9yUm93LCBuZWlnaGJvckNvbCwgZGlzdGFuY2VGcm9tU3RhcnRQb3NpdGlvbiArIDEsIG5vZGUpXHJcblxyXG4gICAgICBpZiAodmlzaXRlZC5oYXMobmVpZ2hib3JOb2RlLmdldFBvc2l0aW9uU3RyaW5nKCkpKSBjb250aW51ZVxyXG5cclxuICAgICAgcXVldWUucHVzaChuZWlnaGJvck5vZGUpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRoKG5vZGUsIHBhdCA9IFtdKSB7XHJcbiAgaWYobm9kZSA9PT0gbnVsbCkgcmV0dXJuXHJcbiAgcGF0aChub2RlLnByZXZpb3VzTm9kZSwgcGF0KVxyXG4gIGNvbnN0IHtyb3csIGNvbH0gPSBub2RlXHJcbiAgcGF0LnB1c2goW3JvdywgY29sXSlcclxuICBpZihwYXQubGVuZ3RoID4gMCkgcmV0dXJuIHBhdFxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludFBhdGgocGF0aHMpIHtcclxuICBwYXRocy5mb3JFYWNoKHBhdGggPT4gY29uc29sZS5sb2cocGF0aCkpXHJcbn1cclxuXHJcbmNvbnN0IGRpcmVjdGlvbnMgPSBbXHJcbiAgWzIsMV0sXHJcbiAgWzEsMl0sXHJcbiAgWy0xLDJdLFxyXG4gIFstMiwxXSxcclxuICBbLTIsLTFdLFxyXG4gIFstMSwtMl0sXHJcbiAgWzEsLTJdLFxyXG4gIFsyLC0xXVxyXG5dXHJcbmZ1bmN0aW9uIGJvYXJkKCkge1xyXG4gIGxldCBhcnJheSA9IFtdXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xyXG4gICAgICBhcnJheS5wdXNoKFtpLGpdKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYXJyYXlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TmVpZ2hib3JzKHJvdywgY29sKSB7XHJcbiAgY29uc3QgbW92ZXMgPSBbXVxyXG4gIGRpcmVjdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGNvbnN0IFtyb3dDaGFuZ2UsIGNvbENoYW5nZV0gPSBpdGVtXHJcbiAgICBjb25zdCBuZWlnaGJvclJvdyA9IHJvdyArIHJvd0NoYW5nZTtcclxuICAgIGNvbnN0IG5laWdoYm9yQ29sID0gY29sICsgY29sQ2hhbmdlO1xyXG5cclxuICAgIG1vdmVzLnB1c2goW25laWdoYm9yUm93LCBuZWlnaGJvckNvbF0pXHJcbiAgfSlcclxuICAvLyBjb25zb2xlLmxvZyhtb3ZlcylcclxuICByZXR1cm4gbW92ZXNcclxufVxyXG5cclxuXHJcbmNvbnN0IGNlbGwgPSBbMCwwXVxyXG5jb25zdCB0YXJnZXQgPSBbMywzXVxyXG5jb25zdCBtb3ZlcyA9IGtuaWdodFNQKGNlbGwsIHRhcmdldClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9