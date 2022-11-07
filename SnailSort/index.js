const snail = function (array) {
  const DIRECTIONS = {
    left: 'left',
    right: 'right',
    down: 'down',
    up: 'up',
  };

  let leftLimit = 0;
  let upLimit = 0;
  let rightLimit = array[0].length - 1;
  let downLimit = array.length - 1;

  let x = 0;
  let y = 0;

  let currentDirection = DIRECTIONS.right;

  const directionChanges = {
    [DIRECTIONS.right]: {
      nextDirection: DIRECTIONS.down,
      getNextPositionKey: () => `${x + 1}${y}`,
      getHasReachedLimit: () => x == rightLimit,
      moveToNextPoition: () => x++
    },
    [DIRECTIONS.down]: {
      nextDirection: DIRECTIONS.left,
      getNextPositionKey: () => `${x}${y + 1}`,
      getHasReachedLimit: () => y == downLimit,
      moveToNextPoition: () => y++
    },
    [DIRECTIONS.left]: {
      nextDirection: DIRECTIONS.up,
      getNextPositionKey: () => `${x - 1}${y}`,
      getHasReachedLimit: () => x == leftLimit,
      moveToNextPoition: () => x--
    },
    [DIRECTIONS.up]: {
      nextDirection: DIRECTIONS.right,
      getNextPositionKey: () => `${x}${y - 1}`,
      getHasReachedLimit: () => y == upLimit,
      moveToNextPoition: () => y--
    },
  };

  const result = [];
  const visited = new Set();

  visited.add(`${y}${x}`);
  const startingItem = array[y][x];
  // if statement required for [[]] empty n*n square
  if(startingItem){
    result.push(startingItem);
  }
  const totalItems = array[0].length * array.length;

  while (result.length < totalItems) {
    const { nextDirection, getNextPositionKey, getHasReachedLimit, moveToNextPoition } = directionChanges[currentDirection];
    const nextPositionKey = getNextPositionKey();
    const hasReachedLimit = getHasReachedLimit();
    const shouldChangeDirection = visited.has(nextPositionKey) || hasReachedLimit;

    if (shouldChangeDirection) {
      currentDirection = nextDirection;
      continue;
    }
    
    visited.add(nextPositionKey);
    moveToNextPoition();
    result.push(array[y][x]);
  }
  return result;
};

console.log(
  snail([[]])
);
