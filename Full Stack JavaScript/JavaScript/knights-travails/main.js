const BOARD_SIZE = 8;

function knightMoves(start, end) {
  if (start[0] === end[0] && start[1] === end[1]) return [start];

  const queue = [{ pos: start, path: [start] }];
  const visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const current = queue.shift();
    const moves = possibleMoves(current.pos);

    for (const move of moves) {
      if (move[0] === end[0] && move[1] === end[1]) {
        return [...current.path, move];
      }

      // Add position to queue if we haven't visited it yet
      if (!visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push({ pos: move, path: [...current.path, move] });
      }
    }
  }
}

function possibleMoves(pos) {
  const [x, y] = pos;
  const potentialMoves = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  // Do no go out of bounds of the BOARD_SIZE
  return potentialMoves.filter((move) => {
    const [newX, newY] = move;
    return newX >= 0 && newX < BOARD_SIZE && newY >= 0 && newY < BOARD_SIZE;
  });
}

function displayPath(path) {
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((pos) => console.log(pos));
}

const path1 = knightMoves([0, 0], [1, 2]);
const path2 = knightMoves([0, 0], [3, 3]);
const path3 = knightMoves([3, 3], [4, 3]);

displayPath(path1);
displayPath(path2);
displayPath(path3);
