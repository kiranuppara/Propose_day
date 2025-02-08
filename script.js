const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'Bandana'; // Replace with your secret code
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim();

    // Convert both user input and secret code to lowercase for case-insensitive comparison
    if (userInput.toLowerCase() === secretCode.toLowerCase()) {
        resultDiv.innerHTML = 'Baby';
        window.location.href = nextPageUrl; // Redirect to new page
    } else {
        resultDiv.innerHTML = 'Naa Tum meri baby nhi hoo kon hooo tum kaha hai meri Sona';
    }
});
