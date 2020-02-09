function solve() {
    const sections = document.getElementsByTagName('section');
    const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

    document.querySelectorAll('.answer-text').forEach(el => el.addEventListener('click', onChoiceSelect));

    let counter = 0;
    let rightAnswers = 0;

    function onChoiceSelect(e) {
        if (e.target.textContent === correctAnswers[counter]) {
            rightAnswers++;
        }

        sections[counter].style.display = 'none';

        counter++;

        if (correctAnswers.length > counter) {
            sections[counter].style.display = 'block';
        } else {
            const result = document.querySelector('.results-inner');
            document.querySelector('#results').style.display = 'block';

            result.textContent = rightAnswers === correctAnswers.length ?
                'You are recognized as top JavaScript fan!' :
                `You have ${rightAnswers} right answers`;
        }
    }
}
