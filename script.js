document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('input[name="name"]');
    const orgInput = document.querySelector('input[name="organization"]');
    const contactInput = document.querySelector('input[name="contact"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Clear previous error messages
        document.querySelectorAll('.error-message').forEach(function(error) {
            error.textContent = '';
        });

        let hasError = false;

        // Validation logic
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required.');
            hasError = true;
        }

        if (orgInput.value.trim() === '') {
            showError(orgInput, 'Organization name is required.');
            hasError = true;
        }

        if (contactInput.value.trim() === '' || !/^\d{10}$/.test(contactInput.value.trim())) {
            showError(contactInput, 'Valid contact number is required.');
            hasError = true;
        }

        if (emailInput.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
            showError(emailInput, 'Valid email ID is required.');
            hasError = true;
        }

        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required.');
            hasError = true;
        }

        // If no errors, show success message
        if (!hasError) {
            formMessage.textContent = 'Form submitted successfully!';
            formMessage.className = 'success';

            // Clear form fields
            form.reset();

            // Remove success message after 5 seconds
            setTimeout(function() {
                formMessage.textContent = '';
                formMessage.className = '';
            }, 5000);
        }
    });

    function showError(input, message) {
        const error = input.nextElementSibling;
        error.textContent = message;
    }
});
