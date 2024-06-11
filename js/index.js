function showSignupForm() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
}

function showLoginForm() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('signup-form').style.display = 'none';
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!validateEmail(email)) {
      alert('Email not valid');
      return false;
  }

  // Dummy check for email and password
  if (email === 'test@example.com' && password === 'password') {
      alert('Login successful');
      window.location.href = 'home.html'; // Redirect to home page
  } else {
      alert('Incorrect email or password');
  }
  return false;
}

function signup(event) {
  event.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  if (!validateEmail(email)) {
      alert('Email not valid');
      return false;
  }

  // Here you would typically handle signup logic
  alert('Sign up successful');
  showLoginForm();
  return false;
}
