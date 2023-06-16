var randomNumber = Math.floor(Math.random() * 80) + 1;
function checkGuess() {
    var guessInput = document.getElementById('guessInput');
    var guess = parseInt(guessInput.value);

    var result = document.getElementById('result');

    if (guess === randomNumber) {
        result.textContent = '恭喜你，猜對了！';
        result.style.color = '#090';
    } else if (guess < randomNumber) {
        result.textContent = '太低了，再猜一次！';
        result.style.color = '#f00';
    } else if (guess > randomNumber) {
        result.textContent = '太高了，再猜一次！';
        result.style.color = '#f00';
    }

    guessInput.value = '';
    guessInput.focus();
}
