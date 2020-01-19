function solve([speed, area]) {
    const areasLimitSpeed = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    if (speed - areasLimitSpeed[area] > 0) {
        if (speed - areasLimitSpeed[area] <= 20) {
            return 'speeding'
        } else if (speed - areasLimitSpeed[area] <= 40) {
            return 'excessive speeding'
        } else {
            return 'reckless driving'
        }
    }
}
