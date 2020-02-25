function solve() {
    document.querySelector('button').addEventListener('click', onButtonClick);
    const section = document.querySelectorAll('section')[1];

    const articles = [];

    function onButtonClick(e) {
        e.preventDefault();

        const article = document.createElement('article');
        section.appendChild(article);

        const h1 = document.createElement('h1');
        h1.textContent = document.getElementById('title').value;

        article.appendChild(h1);

        const p = document.createElement('p');
        p.textContent = 'Category:';
        const strong = document.createElement('strong');
        strong.textContent = document.getElementById('category').value;
        p.appendChild(strong);

        article.appendChild(p);

        const p2 = document.createElement('p');
        p2.textContent = 'Creator:';
        const creator = document.createElement('strong');
        creator.textContent = document.getElementById('creator').value;
        p2.appendChild(creator);

        article.appendChild(p2);

        const p3 = document.createElement('p');
        p3.textContent = document.getElementById('content').value;

        article.appendChild(p3);

        const div = document.createElement('div');
        div.className = 'buttons';

        const button = document.createElement('button');
        button.className = 'btn delete';
        button.textContent = 'Delete';
        div.appendChild(button);

        const button2 = document.createElement('button');
        button2.className = 'btn archive';
        button2.textContent = 'Archive';
        div.appendChild(button2);

        article.appendChild(div);

        button2.addEventListener('click', function () {
            const ul = document.querySelector('ul');
            const li = document.createElement('li');
            li.textContent = h1.textContent;



            ul.appendChild(li);
            article.remove();
        });

        button.addEventListener('click', function () {
            article.remove();
        });
    }
}
