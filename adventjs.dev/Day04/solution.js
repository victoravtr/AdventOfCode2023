function decode(message) {
    const result = message.replace(/\(([^()]*)\)/g, (_, match) => 
      match.split('').reverse().join('')
    );
    return result.includes('(') ? decode(result) : result
  }