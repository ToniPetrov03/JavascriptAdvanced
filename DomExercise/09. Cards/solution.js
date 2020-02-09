function solve() {
    document.querySelectorAll('img').forEach(img => img.addEventListener('click', onButtonClick));

    const [rightSpan, , leftSpan] = document.getElementsByTagName('span');
    const history = document.getElementById('history');

    let pairCards = [];

    function onButtonClick(e) {
        const card = e.target;
        const player = e.target.parentElement.id;

        card.src = 'images/whiteCard.jpg';

        if (player === 'player1Div') {
            rightSpan.textContent = card.name;
        } else {
            leftSpan.textContent = card.name;
        }

        pairCards.push(card);

        if (pairCards.length === 2) {
            const [first, second] = pairCards;

            const value1 = parseInt(first.name);
            const value2 = parseInt(second.name);

            if (value1 > value2) {
                first.style.border = '2px solid green';
                second.style.border = '2px solid red';
            } else if (value1 < value2) {
                first.style.border = '2px solid red';
                second.style.border = '2px solid green';
            }

            history.textContent += `[${rightSpan.textContent} vs ${leftSpan.textContent}] `;

            rightSpan.textContent = '';
            leftSpan.textContent = '';
            pairCards = [];
        }
    }
}
