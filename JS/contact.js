// CONTACT FORM VALIDATION SCRIPT

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        let valid = true;

        // Helper functions
        function setError(id, message) {
            const errorElement = document.getElementById(id);
            errorElement.textContent = message;
            errorElement.style.display = "block";
            valid = false;
        }

        function clearError(id) {
            const errorElement = document.getElementById(id);
            errorElement.textContent = "";
            errorElement.style.display = "none";
        }

        // ---- First Name ----
        const firstName = document.getElementById("firstName");
        if (!/^[A-Za-z]+$/.test(firstName.value)) {
            setError("firstNameError", "First name must contain letters only.");
            firstName.classList.add("error");
        } else {
            clearError("firstNameError");
            firstName.classList.remove("error");
        }

        // ---- Last Name ----
        const lastName = document.getElementById("lastName");
        if (!/^[A-Za-z]+$/.test(lastName.value)) {
            setError("lastNameError", "Last name must contain letters only.");
            lastName.classList.add("error");
        } else {
            clearError("lastNameError");
            lastName.classList.remove("error");
        }

        // ---- Phone Number ----
        const phone = document.getElementById("phoneNumber");
        if (!/^[0-9]{10}$/.test(phone.value)) {
            setError("phoneError", "Phone number must be exactly 10 digits.");
            phone.classList.add("error");
        } else {
            clearError("phoneError");
            phone.classList.remove("error");
        }

        // ---- Email ----
        const email = document.getElementById("email");
        if (!email.value.includes("@") || !email.value.includes(".")) {
            setError("emailError", "Please enter a valid email address.");
            email.classList.add("error");
        } else {
            clearError("emailError");
            email.classList.remove("error");
        }

        // ---- Reason for Inquiry ----
        const reason = document.getElementById("inquiryReason");
        if (reason.value.trim() === "") {
            setError("reasonError", "Please choose or type a reason.");
            reason.classList.add("error");
        } else {
            clearError("reasonError");
            reason.classList.remove("error");
        }

        // ---- Message ----
        const message = document.getElementById("message");
        if (message.value.trim() === "") {
            setError("messageError", "Message cannot be empty.");
            message.classList.add("error");
        } else {
            clearError("messageError");
            message.classList.remove("error");
        }

        // Prevent form submission if invalid
        if (!valid) {
            e.preventDefault();
        }
    });
});
