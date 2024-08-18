import { ProjectController } from '../src/js/controladores/projectController.js';

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