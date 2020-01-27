function solve([speed, area]) {
    const areasLimitSpeed = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const speedDifference = speed - areasLimitSpeed[area];

    if (speedDifference > 0) {
        if (speedDifference <= 20) {
            return 'speeding';
        } else if (speedDifference <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}
