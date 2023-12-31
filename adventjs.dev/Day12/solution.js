function checkIsValidCopy(original, copy) { // FIXME: as always, I think there is a better way to do this
    const symbols = [ '#', '+', ':', '.', ' ']
    original = original.split('')
    copy = copy.split('')
    for (let i = 0; i < original.length; i++) {
      if (original[i] === copy[i]) {
        continue
      }
      if (original[i].toLowerCase() === copy[i]){
        copy[i] = original[i]
        continue
      }
      if(symbols.includes(copy[i])){
        symbols.indexOf(original[i]) < symbols.indexOf(copy[i]) ? copy[i] = original[i] : ''
        continue
      }
    }
    return original.join('') === copy.join('')
  }