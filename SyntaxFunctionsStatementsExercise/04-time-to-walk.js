function solve(steps, footprint, kmPerHour) {
    const stepsTime = new Array(steps).fill(footprint / (kmPerHour * 1000 / 3600));

    let distance = 0;
    let metersForRest = 500;

    const travelTimeSec = stepsTime.reduce((time, stepTime) => {
        distance += footprint;

        if (distance > metersForRest) {
            metersForRest += 500;
            time += 60;
        }

        return time + stepTime;
    }, 0);

    const date = new Date(null);
    date.setSeconds(Math.round(travelTimeSec));
    return date.toISOString().substr(11, 8);
}
