import { AuthController } from '../src/js/controladores/authController.js';
import { ProjectController } from '../src/js/controladores/projectController.js';

document.addEventListener('DOMContentLoaded', () => {
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

  // Panel de control
  const projectForm = document.getElementById('project-form');
  if (projectForm) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
      window.location.href = 'login.html'; // Redirige a inicio de sesión si no hay usuario autenticado
    } else {
      projectForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const status = event.target.status.value;
        ProjectController.addProject(name, description, status, loggedInUser);
      });

      ProjectController.displayProjects(loggedInUser);
    }
  }

  // Cierre de sesión
  const logoutButton = document.getElementById('logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('loggedInUser');
      window.location.href = 'login.html'; // Redirige a inicio de sesión
    });
  }
});
