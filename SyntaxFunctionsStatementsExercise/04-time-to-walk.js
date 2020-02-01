function solve(steps, footprint, kmPerHour) {
    const meters = footprint * steps;
    const minBreaks = Math.floor(meters / 500);
    const sec = meters / 1000 / kmPerHour * 3600;
    const totalSec = minBreaks * 60 + sec;

    const time = new Date(null);
    time.setSeconds(Math.round(totalSec));
    return time.toISOString().substr(11, 8);
}
