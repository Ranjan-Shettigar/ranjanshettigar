document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const submitButton = document.querySelector('.btn-submit');
    submitButton.classList.add('loading'); // Add loading class
    submitButton.disabled = true; // Disable the button to prevent multiple submissions
    submitButton.textContent = 'Sending...'; // Change button text (hidden during loading)
    sendEmail(submitButton); // Pass the button to the function
});

function sendEmail(submitButton) {
    const formData = {
        name: document.getElementById('name').value,
        to_email: document.getElementById('to_email').value,
        message: document.getElementById('message').value
    };
    fetch('https://loko.serv00.net/send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        submitButton.classList.remove('loading'); // Remove loading class
        submitButton.disabled = false; // Re-enable the button
        submitButton.textContent = data; // Display response message on the button
        setTimeout(() => {
            submitButton.textContent = 'Send Message'; // Reset button text
        }, 3000); // Keep the response message for 3 seconds
        document.getElementById('contactForm').reset(); // Clear the form
    })
    .catch(error => {
        submitButton.classList.remove('loading'); // Remove loading class
        submitButton.disabled = false; // Re-enable the button
        submitButton.textContent = 'Error: ' + error; // Display error message on the button
        setTimeout(() => {
            submitButton.textContent = 'Send Message'; // Reset button text
        }, 3000); // Keep the error message for 3 seconds
    });
}
