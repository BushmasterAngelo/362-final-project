document.addEventListener('DOMContentLoaded', () => {
    // 1. Get a reference to the form using its ID (which we added previously)
    const form = document.getElementById('editor-signup-form');

    // Check if the form element exists on this page
    if (form) {
        // 2. Add an event listener to the form's submission event
        form.addEventListener('submit', (event) => {
            // Prevent the default browser submission (so we can validate it ourselves)
            event.preventDefault();

            // 3. Get the values from the password and confirmation fields
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Simple validation: check if the passwords match
            if (password !== confirmPassword) {
                // 4. If they DON'T match: Show an error alert
                alert("Error: Passwords do not match. Please re-enter.");
                
                // Optional: Clear the password fields
                document.getElementById('password').value = '';
                document.getElementById('confirm-password').value = '';
                
            } else {
                // 5. If they DO match: Show the SUCCESS pop-up (REQUIRED INTERACTION)
                alert("Success! Your editor application has been received. We will contact you soon!");

                // Optional: Clear the entire form after successful submission
                form.reset();
            }
        });
    }
});