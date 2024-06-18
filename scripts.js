document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registrationForm');
    const errorName = document.getElementById('errorName');
    const errorEmail = document.getElementById('errorEmail');
    const errorPhone = document.getElementById('errorPhone');
    const errorDate = document.getElementById('errorDate');
    const errorTickets = document.getElementById('errorTickets');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;
        const nameInputs = document.querySelectorAll('#firstName, #lastName');
        const email = document.querySelector('#email');
        const phone = document.querySelector('#phone');
        const date = document.querySelector('#date');
        const tickets = document.querySelector('#tickets');

        // Clear existing errors
        errorName.textContent = '';
        errorEmail.textContent = '';
        errorPhone.textContent = '';
        errorDate.textContent = '';
        errorTickets.textContent = '';

        // Validate Name
        const name = Array.from(nameInputs).map(input => input.value.trim()).join(' ');
        if (!/^[\w\s]+$/.test(name)) {
            isValid = false;
            errorName.textContent = 'Name can only contain letters, numbers, and spaces.';
        }

        // Validate Email
        if (!/\S+@\S+\.\S+/.test(email.value)) {
            isValid = false;
            errorEmail.textContent = 'Please enter a valid email address.';
        }

        // Validate Phone Number
        if (!/^\(\d{3}\)\s*\d{3}-\d{4}$/.test(phone.value)) {
            isValid = false;
            errorPhone.textContent = 'Please enter a valid phone number in the format (123) 456-7890.';
        }

        // Validate Event Date
        const dateParts = date.value.split('/');
        if (dateParts.length!== 3 || isNaN(parseInt(dateParts[0])) || isNaN(parseInt(dateParts[1])) || isNaN(parseInt(dateParts[2]))) {
            isValid = false;
            errorDate.textContent = 'Please enter a valid date in MM/DD/YYYY format.';
        }

        // Validate Number of Tickets
        if (isNaN(parseInt(tickets.value)) || parseInt(tickets.value) < 1 || parseInt(tickets.value) > 10) {
            isValid = false;
            errorTickets.textContent = 'Please select a number of tickets between 1 and 10.';
        }

        if (isValid) {
            alert('Registration successful!');
            // Reset form after successful submission
            form.reset();
        }
    });
});