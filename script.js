const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const resultDiv = document.getElementById('result');

const secretCode = 'Bandana'; // Secret code
const nextPageUrl = 'main.html'; // URL to redirect on success

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const userInput = codeInput.value.trim();
    console.log("User Input:", userInput);
    console.log("Secret Code:", secretCode);
    console.log("Comparison Result:", userInput.toLowerCase() === secretCode.toLowerCase());

    if (userInput.toLowerCase() === secretCode.toLowerCase()) {
        resultDiv.innerHTML = 'Bandana';
        setTimeout(() => {
            window.location.href = nextPageUrl; // Redirect after a slight delay
        }, 500);
    } else {
        resultDiv.innerHTML = 'Naa Tum meri bandana nhi hoo kon hooo tum kaha hai meri sona';
    }
});
