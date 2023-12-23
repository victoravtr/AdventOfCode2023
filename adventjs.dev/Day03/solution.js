function findNaughtyStep(original, modified) {
    const control = original.length > modified.length ? original : modified
    for (let i = 0; i < control.length; i++) {
        if (original[i] !== modified[i]) {
            return control[i]
        }
    }
    return ''
}