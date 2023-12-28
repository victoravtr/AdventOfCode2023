function organizeGifts(gifts) { // FIXME: There is a better or cleaner way of doing this
    let result = ''
    const giftsArray = gifts.match(/\d+|\D+/g).map(item => isNaN(item) ? item : Number(item))
    for (let i = 0; i < giftsArray.length; i+=2) {
      const giftsNumber = giftsArray[i]
      const giftsName = giftsArray[i+1]
      let boxesNumber = Math.floor(giftsNumber/10)
      const giftsLeft = giftsNumber - boxesNumber * 10
      const paletsNumber = Math.floor(boxesNumber/5)
      boxesNumber = boxesNumber - paletsNumber * 5
      if (paletsNumber > 0) {
        result += `[${giftsName}]`.repeat(paletsNumber)
      }
      if (boxesNumber > 0) {
        result += `{${giftsName}}`.repeat(boxesNumber)
      }
      if (giftsLeft > 0) {
        result += '(' + giftsName.repeat(giftsLeft) + ')'
      }
    }
    return result
  }