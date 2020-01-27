function solve(steps, footprint, kmPerHour) {
    const stepsTime = new Array(steps).fill(footprint / (kmPerHour * 1000 / 3600));

    const travelTimeSec = stepsTime.reduce((travelData, stepTime) => {
        let [time, distance, metersForRest] = travelData;

        distance += footprint;

        if (distance > metersForRest) {
            metersForRest += 500;
            time += 60;
        }

        time += stepTime;

        return [time, distance, metersForRest];
    }, [0, 0, 500]).slice(0, 1);

    const date = new Date(null);
    date.setSeconds(Math.round(travelTimeSec));
    return date.toISOString().substr(11, 8);
}
