import { ProjectController } from '../controladores/projectController.js';

window.onload = function() {
  let user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) {
    window.location.href = 'login.html';
  }
  
  const projectList = document.getElementById('projectList');
  const filterName = document.getElementById('filterName');
  
  function displayProjects(filter = '') {
    projectList.innerHTML = '';
    
    const projects = ProjectController.getProjects().filter(p => p.user === user.email && p.name.includes(filter));
    projects.forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.name} - ${p.description} - ${p.status}`;
      projectList.appendChild(li);
    });
  }
  
  filterName.addEventListener('input', function() {
    displayProjects(this.value);
  });

  document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  });
  
  displayProjects();
};
