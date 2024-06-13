const greetings = [
    'Hey', 'Hi', 'Hello', 'Howdy', 'Salute', 'Sup', 'Yo'
];
const displayRandomGreeting = () => {
    document.getElementById('greeting-text').innerText = greetings[Math.floor(Math.random() * greetings.length)] + '!';
}
export { displayRandomGreeting };