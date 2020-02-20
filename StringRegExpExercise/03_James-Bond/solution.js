function solve() {
    const [key, ...texts] = JSON.parse(document.getElementById('array').value);
    const result = document.getElementById('result');

    const regex = new RegExp(`(\\s|^)(${key}\\s+)([A-Z!#$%]{8,})(\\.|,|\\s|$)`, 'gi');

    [...texts].forEach(text => {
        let match = regex.exec(text);
        
        while (match) {
            const encodeMessage = match[3];

            if (encodeMessage.toUpperCase() === encodeMessage) {
                const decodeMessage = encodeMessage.replace(/!/, '1').replace(/#/, '3').replace(/\$/, '4').toLowerCase();
                const message = match[1] + match[2] + decodeMessage + match[4];
                text = text.replace(match[0], message);
            }

            match = regex.exec(text);
        }

        const pElement = document.createElement('p');
        pElement.textContent = text;
        result.appendChild(pElement);
    });
}
