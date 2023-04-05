import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required ]),
  });

  constructor(private snackBar: MatSnackBar, 
    private auth: AuthService,
    private route: Router) {}

  register() {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;
      // Envía los datos del formulario a tu servidor
      const {email, password} = data;
      this.auth.register({email, password})
      .then( res => {
        console.log(res);
      })
      .catch( err => {
        console.log(err);
      })
      this.snackBar.open('Registro exitoso', 'Cerrar', { duration: 3000 });
      this.route.navigate(['/login']);
      // Realiza alguna otra acción necesaria
    } else {
      this.snackBar.open('El formulario es inválido', 'Cerrar', { duration: 3000 });
    }
  }

  matchConfirmPassword(control: FormControl) {
    const password = this.registerForm.controls['password'].value;
    const confirmPassword = control.value;
    return password === confirmPassword ? null : { mismatch: true };
  }



 

}
