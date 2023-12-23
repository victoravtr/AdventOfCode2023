function manufacture(gifts, materials) {
    return gifts.filter(gift => {
        const giftMaterials = new Set(gift)
        for (const material of giftMaterials) {
            if (!materials.includes(material)) {
                return false
            }
        }
        return true
    });
}