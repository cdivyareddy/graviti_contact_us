function validateForm() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const successMessage = document.getElementById("successMessage");

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
        alert("Please fill in all the fields.");
        return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate phone format (example for US phone numbers)
    const phonePattern = /^\+?\d{1,3}?\s?\d{3}?\s?\d{3}?\s?\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    // If validation passes, display success message
    successMessage.style.display = "block";
    return false; // Prevent actual form submission for demo purposes
}
