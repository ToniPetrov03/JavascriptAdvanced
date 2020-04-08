function solve() {
    const _task = document.getElementById('task');
    const _description = document.getElementById('description');
    const _date = document.getElementById('date');

    const [, openSection, inProgressSection, completeSection] = document.querySelectorAll('section');

    const openContainer = openSection.querySelectorAll('div')[1];
    const inProgressContainer = inProgressSection.querySelectorAll('div')[1];
    const completeContainer = completeSection.querySelectorAll('div')[1];


    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault();

        const task = _task.value;
        const description = _description.value;
        const date = _date.value;


        if (!(task && description && date)) return;

        const article = document.createElement('article');

        article.innerHTML = ` 
<h3>${task}</h3>
<p>Description: ${description}</p>
<p>Due Date: ${date}</p>
<div class="flex">
        <button class="green">Start</button>
        <button class="red">Delete</button>
</div>`;

        const [startBtn, deleteBtn] = article.querySelectorAll('button');


        startBtn.addEventListener('click', () => {
            article.remove();

            article.innerHTML = ` 
<h3>${task}</h3>
<p>Description: ${description}</p>
<p>Due Date: ${date}</p>
<div class="flex">
        <button class="red">Delete</button>
        <button class="orange">Finish</button>
</div>`;

            const [deleteBtn, finishBtn] = article.querySelectorAll('button');

            deleteBtn.addEventListener('click', () => {
                article.remove();
            });

            finishBtn.addEventListener('click', () => {
                article.remove();

                article.innerHTML = `
<h3>${task}</h3>
<p>Description: ${description}</p>
<p>Due Date: ${date}</p>
`;

                completeContainer.appendChild(article);
            });

            inProgressContainer.appendChild(article);
        });

        deleteBtn.addEventListener('click', () => {
            article.remove();
        });

        openContainer.appendChild(article)
    })
}