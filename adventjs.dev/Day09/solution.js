function adjustLights(lights) { // FIXME: There is a better or cleaner way of doing this
    const redStart = []
    const greenStart = []
    for (let i = 0; i < lights.length; i++) {
        redStart.push(i % 2 === 0 ? '🔴' : '🟢')
        greenStart.push(i % 2 === 0 ? '🟢' : '🔴')
    }
    const redDifferences = redStart.reduce((accumulator, value, index) => accumulator + (value !== lights[index] ? 1 : 0), 0);
    const greenDifferences = greenStart.reduce((accumulator, value, index) => accumulator + (value !== lights[index] ? 1 : 0), 0);

    return Math.min(redDifferences, greenDifferences);
}

// I like this one so much but doesn't work 😭
function adjustLightsWrongWay(lights) {
    const expectedColors = lights[0] === '🔴' ? ['🔴', '🟢'] : ['🟢', '🔴'];
    const changesArray = lights.map((light, index) => light === expectedColors[index % 2] ? false : true);
    const changesNeeded = changesArray.reduce((acc, isChangeNeeded) => acc + (isChangeNeeded ? 1 : 0), 0);

    return changesNeeded;
}