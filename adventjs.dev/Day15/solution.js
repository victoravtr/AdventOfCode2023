function autonomousDrive(store, movements) { // FIXME: There is like 1000 ways to do this better
    let robotPosition = [0, 0]
    for (let i = 0; i < store.length; i++){
      if (store[i].indexOf('!') !== -1) {
        robotPosition = [i, store[i].indexOf('!')]
        break
      }
    }
    store = store.map(row => row.split(''));
    store[robotPosition[0]][robotPosition[1]] = '.'
    const isValid = (robotPosition, movement) => {
      const posX = robotPosition[0] + movement[0]
      const posY = robotPosition[1] + movement[1]
      if (posX >= store.length || posY >= store[posX].length) {
        return false;
      }
      return store[posX][posY] === '.'
    }
    const positions = { R: [0, 1], 
                       L: [0, -1], 
                       D: [1, 0], 
                       U: [-1, 0] 
                      };
    movements.forEach(movement => {
      if (isValid(robotPosition, positions[movement])) {
        robotPosition[0] = robotPosition[0] + positions[movement][0]
        robotPosition[1] = robotPosition[1] + positions[movement][1]
      }
    })
    store[robotPosition[0]][robotPosition[1]] = '!'
    store = store.map(row => row.join(''));
    return store
  }