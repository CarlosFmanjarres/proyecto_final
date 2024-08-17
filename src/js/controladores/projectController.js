import { Project } from '../modelos/proyecto.js';

export class ProjectController {
  static getProjects() {
    return JSON.parse(localStorage.getItem('projects')) || [];
  }

  static saveProject(project) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}
