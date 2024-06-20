document.addEventListener("DOMContentLoaded", function() {
    function isValidDate(dateString) {
        const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        if (!datePattern.test(dateString)) {
            return false;
        }
        
        const [month, day, year] = dateString.split('/').map(Number);
        const date = new Date(year, month - 1, day);
        
        return date.getFullYear() === year &&
               date.getMonth() === month - 1 &&
               date.getDate() === day;
    }

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
        } else errorName.textContent = '';

        // Validate Email
        if (!/\S+@\S+\.\S+/.test(email.value)) {
            isValid = false;
            errorEmail.textContent = 'Please enter a valid email address.';
        } else errorEmail.textContent = '';

        // Phone Number validation
        if (!/^\(\d{3}\)\s*\d{3}-\d{4}$/.test(phone.value)) {
            isValid = false;
            errorPhone.textContent = 'Please enter a valid phone number in the format (123) 456-7890.';
        } else errorPhone.textContent = '';

        // Validate Event Date
        if (!isValidDate(date.value)) {
            isValid = false;
            errorDate.textContent = 'Please enter a valid date in MM/DD/YYYY format.';
        } else errorDate.textContent = '';

        // Validate Number of Tickets
        if (tickets.value === "" || !/^(10|[1-9])$/.test(tickets.value)) {
            isValid = false;
            errorTickets.textContent = 'Please select a number of tickets between 1 and 10.';
        } errorTickets.textContent = '';

        if (isValid) {
            alert('Registration successful!');
            // Reset form after successful submission
            form.reset();
        }
    });
});