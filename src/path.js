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

export default function knightSP(start, target) {
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


