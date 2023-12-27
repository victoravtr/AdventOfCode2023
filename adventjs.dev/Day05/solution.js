function cyberReindeer(road, time) {
    let result = []
    let index = 0
    let currentStep = "."
    road = road.split("")
    for (let i = 1; i <= time; i++) {
        result.push(road.join(""))
        if (i == 5){
            road = road.map(item => item.replace(/\|/gi, "*"));
        }
        if (road[index  + 1] !== '|') {
            road[index] = currentStep
            currentStep = road[index + 1]
            road[index + 1] = "S"
            index++
        }
    }
    return result
}