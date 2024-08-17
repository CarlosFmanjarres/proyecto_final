import { User } from '../models/user.js';

export class AuthController {
  static register(name, email, password, role) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,}$/;

    if (!emailRegex.test(email)) {
      alert('Formato de correo electrónico inválido.');
      return false;
    }

    if (!passwordRegex.test(password)) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(new User(name, email, password, role));
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso');
    return true;
  }

  static login(email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = 'dashboard.html';
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
