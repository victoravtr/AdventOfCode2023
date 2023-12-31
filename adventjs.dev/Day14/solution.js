function maxGifts(houses) {
    const maxGiftsArray = new Array(houses.length)
    maxGiftsArray[0] = houses[0]
    maxGiftsArray[1] = Math.max(houses[0], houses[1])
    for (let i = 2; i < houses.length; i++) {
      maxGiftsArray[i] = Math.max(
        maxGiftsArray[i - 1],
        maxGiftsArray[i - 2] + houses[i]
      );
    }

    return maxGiftsArray[houses.length - 1];
}