function solve() {
    const articlesContainer = document.querySelector('main section');
    const archivesContainer = document.querySelector('.archive-section ul');

    const creator = document.getElementById('creator');
    const title = document.getElementById('title');
    const category = document.getElementById('category');
    const content = document.getElementById('content');

    document.querySelector('button').addEventListener('click', onButtonClick);

    const articles = [];

    function onButtonClick(e) {
        e.preventDefault();

        const titleName = title.value;

        const article = document.createElement('article');

        article.innerHTML = `
  <h1>${titleName}</h1>
  <p>
    Category:
    <strong>${category.value}</strong>
  </p>
  <p>
    Creator:
    <strong>${creator.value}</strong>
  </p>
  <p>${content.value}</p>
  <div class="buttons">
    <button class="btn delete">Delete</button>
    <button class="btn archive">Archive</button>
  </div>
`;

        const [deleteBtn, archiveBtn] = article.querySelectorAll('button');

        deleteBtn.addEventListener('click', () => {
            article.remove();
        });

        archiveBtn.addEventListener('click', () => {
            article.remove();

            articles.push(titleName);
            articles.sort((a, b) => a.localeCompare(b));

            archivesContainer.innerHTML = articles.reduce((html, title) => html + `<li>${title}</li>`, '');
        });

        articlesContainer.appendChild(article);
    }
}
