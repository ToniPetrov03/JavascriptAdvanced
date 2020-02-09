function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', onButtonClick);

    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');
    const inputDistance = document.getElementById('inputDistance');
    const outputDistance = document.getElementById('outputDistance');

    function onButtonClick() {
        let outputRes = parseFloat(inputDistance.value);

        // convert to meters
        switch (inputUnits.value) {
            case 'km': outputRes *= 1000; break;
            case 'cm': outputRes *= 0.01; break;
            case 'mm': outputRes *= 0.001; break;
            case 'mi': outputRes *= 1609.34 ; break;
            case 'yrd': outputRes *= 0.9144; break;
            case 'ft': outputRes *= 0.3048; break;
            case 'in': outputRes *= 0.0254 ; break;
        }

        // convert from meters
        switch (outputUnits.value) {
            case 'km': outputRes /= 1000; break;
            case 'cm': outputRes /= 0.01; break;
            case 'mm': outputRes /= 0.001; break;
            case 'mi': outputRes /= 1609.34 ; break;
            case 'yrd': outputRes /= 0.9144; break;
            case 'ft': outputRes /= 0.3048; break;
            case 'in': outputRes /= 0.0254 ; break;
        }

        outputDistance.value = outputRes;
    }
}
