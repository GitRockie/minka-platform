import { Component } from '@angular/core';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent { 


  nombre?: string;
  apellidos?: string;
  nif?: string;
  cp?: string;
  location?: string;
  tipo?: string;
  email?: string;
  password?: string;

  
  register() {
    // Aquí puedes manejar la lógica de registro, enviar los datos al servidor, etc.
    console.log('Registro exitoso');
  }
}