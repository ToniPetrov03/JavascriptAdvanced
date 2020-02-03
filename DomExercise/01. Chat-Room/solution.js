function solve() {
    const input = document.getElementById('chat_input');
    const chatMessages = document.getElementById('chat_messages');

    document.getElementById('send').addEventListener('click', function () {
        const newElement = document.createElement('div');
        newElement.textContent = input.value;
        newElement.classList.add('message', 'my-message');
        chatMessages.appendChild(newElement);
        input.value = '';
    });
}
