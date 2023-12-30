function getIndexsForPalindrome(word) { // FIXME: I'm probably missing something and there is a better way to do it
    if (word === word.split("").reverse().join("")) {
      return [];
    }
    for (let i = 0; i < word.length; i++) {
      for (let j = i + 1; j < word.length; j++) {
        const newWord = `${word.substring(0, i)}${word[j]}${word.substring(i + 1, j)}${word[i]}${word.substring(j + 1)}`
        if (newWord === newWord.split("").reverse().join("")) {
          return [i, j];
        }
      }
    }
    return null;
  }