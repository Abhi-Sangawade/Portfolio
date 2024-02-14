document.addEventListener('DOMContentLoaded', function() {
  // Select the form
  const form = document.getElementById('contact-form');

  // Select the success message container
  const successMessageContainer = document.getElementById('success-message');

  // Add submit event listener to the form
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Create an object to store form data
    const formDataObject = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };
    storeFormData(formDataObject);

    // Display success message
    displaySuccessMessage();

    // Reset the form after submission
    form.reset();
  });

  // Function to display success message
  function displaySuccessMessage() {
    // Clear previous content if any
    successMessageContainer.innerHTML = '';

    // Create a new success message element
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Data submitted successfully!';
    successMessage.classList.add('success-message');

    // Append success message to the success message container
    successMessageContainer.appendChild(successMessage);
  }

  function storeFormData(data) {
    
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    storedData.push(data);
    localStorage.setItem('formData', JSON.stringify(storedData));
  }
});

