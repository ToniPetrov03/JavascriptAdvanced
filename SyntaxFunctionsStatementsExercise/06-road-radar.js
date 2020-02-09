function solve([speed, area]) {
    const areasLimitSpeed = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const speedDifference = speed - areasLimitSpeed[area];

    if (speedDifference > 40) return 'reckless driving';
    if (speedDifference > 20) return 'excessive speeding';
    if (speedDifference > 0) return 'speeding';
}
