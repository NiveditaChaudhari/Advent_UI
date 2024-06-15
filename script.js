(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    showSuccessMessage();
                    form.reset();
                    form.classList.remove('was-validated'); // Clear validation state after reset
                    setTimeout(function() {
                        window.location.reload(); // Reload the page after 5 seconds
                    }, 5000);
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function showSuccessMessage() {
    var messageDiv = document.getElementById('form-messages');
    messageDiv.innerHTML = <div class="alert alert-success">Form submitted successfully!</div>;
    setTimeout(function() {
        messageDiv.innerHTML = '';
    }, 5000);
}

