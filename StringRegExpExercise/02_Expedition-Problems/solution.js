function solve() {
    const str = document.getElementById('string').value;
    const text = document.getElementById('text').value;

    const northRegex = /north[^\d]*(\d{2})[^,]*,[^,\d]*?(\d{6})/igm;
    const eastRegex = /east[^\d]*(\d{2})[^,]*,[^,\d]*?(\d{6})/igm;

    const [, degreesN, decimalPartN] = northRegex.exec(text.match(northRegex).slice(-1)[0]);
    const [, degreesE, decimalPartE] = eastRegex.exec(text.match(eastRegex).slice(-1)[0]);

    const northLocation = `${degreesN}.${decimalPartN} N`;
    const eastLocation = `${degreesE}.${decimalPartE} E`;

    const firstMention = text.indexOf(str);
    const secondMention = text.indexOf(str, (firstMention + 1));

    const encodedMessage = 'Message: ' + text.substring((firstMention + str.length), secondMention);

    const appendToParent = (text) => {
        const p = document.createElement('p');
        p.textContent = text;
        document.getElementById('result').appendChild(p);
    }

    appendToParent(northLocation);
    appendToParent(eastLocation);
    appendToParent(encodedMessage);
}
