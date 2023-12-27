function maxDistance(movements) {
    movements = movements.split('')
    let total = 0
    let wildcard = 0
    movements.forEach(movement => {
      if (movement === '>') {
        total += 1
      }
      else if (movement === '<') {
        total -= 1
      }
      else {
        wildcard += 1 
      }
    })
    return Math.abs(total) + wildcard
  }