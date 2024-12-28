document.getElementById('registrationForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const form = document.getElementById('registrationForm');
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const errorDiv = document.getElementById('errorMessage');
  const successDiv = document.getElementById('successMessage');
  const formContainer = document.querySelector('.form-container');
  const thankYouContainer = document.querySelector('.thank-you');

  try {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username }),
    });

    const data = await response.json();

    if (response.ok) {
      errorDiv.style.display = 'none';
      formContainer.style.display = 'none';
      thankYouContainer.style.display = 'block';
      thankYouContainer.classList.add('animate');
    } else {
      errorDiv.style.display = 'block';
      successDiv.style.display = 'none';
      errorDiv.textContent = data.error;
      errorDiv.classList.add('animate');
    }
  } catch (error) {
    errorDiv.style.display = 'block';
    successDiv.style.display = 'none';
    errorDiv.textContent = 'Registration failed. Please try again.';
    errorDiv.classList.add('animate');
  }
});