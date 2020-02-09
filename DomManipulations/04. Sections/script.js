function create(words) {
   const content = document.getElementById('content');

    words.forEach(word => {
        const div = document.createElement('div');
        const p = document.createElement('p');

        div.appendChild(p);
        p.textContent = word;
        p.style.display = 'none';

        div.addEventListener('click', function () {
           p.style.display = 'block';
        });

       content.appendChild(div);
    });
}
