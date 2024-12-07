// Game Variables
let secretNumber;
let attempts = 0;

// Get DOM elements
const submitButton = document.getElementById('submitGuess');
const resetButton = document.getElementById('resetGame');
const feedback = document.getElementById('feedback');
const guessInput = document.getElementById('guess');

// Start the game when the page loads
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    attempts = 0;
    feedback.textContent = ''; // Clear feedback
    guessInput.value = ''; // Clear the input field
}

// Handle Guess Submission
function handleGuess() {
    const userGuess = parseInt(guessInput.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        feedback.style.color = 'red';
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        feedback.style.color = 'green';
    } else if (userGuess < secretNumber) {
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color = 'orange';
    } else {
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color = 'orange';
    }
}

// Reset Game
function resetGame() {
    startGame(); // Restart the game
}

// Add Event Listeners
submitButton.addEventListener('click', handleGuess);
resetButton.addEventListener('click', resetGame);

// Start the game when the page loads
window.onload = startGame;
