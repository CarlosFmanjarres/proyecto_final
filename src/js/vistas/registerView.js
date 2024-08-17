import { AuthController } from '../controladores/authController.js';

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  if (AuthController.register(name, email, password, role)) {
    window.location.href = 'login.html';
  }
});
