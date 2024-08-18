import { AuthController } from '../src/js/controladores/authController.js';

// Registro
const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const role = event.target.role.value;
    AuthController.register(name, email, password, role);
  });
}

// Inicio de sesión
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    AuthController.login(email, password);
  });
}

// Cierre de sesión
const logoutButton = document.getElementById('logout');
if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html'; // Redirige a inicio de sesión
  });
}