
const keys = document.querySelectorAll('.key');

function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.addEventListener('error', () => {
        console.error(`Не удалось загрузить файл для ноты ${note}`);
    });
    audio.play();
}

keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        playSound(note);
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'), 150); 
    });
});

document.addEventListener('keydown', (event) => {
    const keyMapping = {
        'KeyC': 'C',
        'KeyD': 'D',
        'KeyE': 'E',
        'KeyF': 'F',
        'KeyG': 'G',
        'KeyA': 'A',
        'KeyB': 'B'
    };
    const note = keyMapping[event.code];
    if (note) {
        playSound(note);
        const keyElement = document.getElementById(note);
        keyElement.classList.add('active');
        setTimeout(() => keyElement.classList.remove('active'), 150);
    }
});
