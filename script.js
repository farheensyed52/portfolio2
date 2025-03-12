document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
    document.getElementById('formResponse').textContent = 'Thank you for your message!';
    document.getElementById('formResponse').style.color = 'green';
  } else {
    document.getElementById('formResponse').textContent = 'Please fill in all fields.';
    document.getElementById('formResponse').style.color = 'red';
  }
});