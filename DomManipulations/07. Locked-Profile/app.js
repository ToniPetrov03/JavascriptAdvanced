function lockedProfile() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', onButtonClick));

    function onButtonClick(e) {
        const button = e.target;
        const profile = button.parentNode;
        const moreInformation = profile.querySelector('div');
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}
