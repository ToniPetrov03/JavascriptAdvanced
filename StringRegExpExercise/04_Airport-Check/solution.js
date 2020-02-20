function extractInfo() {
    const [text, printInfo] = document.getElementById('string').value.split(/\s*,\s*/);

    const name = text
        .match(/ [A-Z][A-Za-z]*-[A-Z][A-Za-z]*( |\.-[A-Z][A-Za-z]* )/)[0]
        .trim()
        .replace(/-/g, ' ');
    const [fromAirport, toAirport] = text
        .match(/ [A-Z]{3}\/[A-Z]{3} /)[0]
        .trim()
        .split('/');
    const number = text
        .match(/ [A-Z]{1,3}[\d]{1,5} /)[0]
        .trim();
    const company = text
        .match(/- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]* /)[0]
        .replace('- ', '')
        .replace(/\*/g, ' ')
        .trim();

    const result = document.getElementById('result');

    let output;

    switch (printInfo) {
        case 'name': output = `Mr/Ms, ${name}, have a nice flight!`; break;
        case 'flight': output = `Your flight number ${number} is from ${fromAirport} to ${toAirport}.`; break;
        case 'company': output = `Have a nice flight with ${company}.`; break;
        case 'all': output = `Mr/Ms, ${name}, your flight number ${number} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`; break;
    }

    result.textContent = output;
}
