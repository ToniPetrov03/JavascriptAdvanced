function attachEventsListeners() {
    const buttons = document.querySelectorAll('input[value="Convert"]');

    buttons.forEach(button => button.addEventListener('click', onButtonConvert));

    function onButtonConvert(e) {
        const input = e.target.previousElementSibling;
        let number = parseFloat(input.value);
        const timeMeasure = input.id;

        switch (timeMeasure) {
            case 'hours': number /= 24; break;
            case 'minutes': number /= 1440; break;
            case 'seconds': number /= 86400; break;
        }

        document.getElementById('days').value = number;
        document.getElementById('hours').value = number * 24;
        document.getElementById('minutes').value = number * 1440;
        document.getElementById('seconds').value = number * 86400;
    }
}
