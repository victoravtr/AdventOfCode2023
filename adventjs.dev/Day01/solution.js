function findFirstRepeated(giftIds) {
    const seen = new Set();
    for (let i = 0; i < giftIds.length; i++) {
        if (seen.has(giftIds[i])) {
            return giftIds[i];
        }
        seen.add(giftIds[i]);
    }
    return -1;
}