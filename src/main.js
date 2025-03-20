function contact(event) {
  event.preventDefault(); // Prevent form submission

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let errorElement = document.getElementById("error");

  // Reset previous errors
  errorElement.textContent = "";

  // Name validation: Must not be empty and should be at least 3 characters
  if (name.length < 3) {
    errorElement.textContent = "Name must be at least 3 characters long.";
    return;
  }

  // Email validation: Basic regex check
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    errorElement.textContent = "Enter a valid email address.";
    return;
  }

  // Message validation: Should not be empty
  if (message.length < 5) {
    errorElement.textContent = "Message must be at least 5 characters long.";
    return;
  }

  // If all validations pass
  errorElement.style.color = "green";
  errorElement.textContent = "Form submitted successfully!";

  setTimeout(() => {
    errorElement.textContent = ""; // Remove success message after 3s
  }, 3000);

  document.querySelector("form").reset(); // Reset form fields
}
