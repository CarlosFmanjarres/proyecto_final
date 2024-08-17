import { AuthController } from '../controladores/authController.js';

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  AuthController.login(email, password);
});
