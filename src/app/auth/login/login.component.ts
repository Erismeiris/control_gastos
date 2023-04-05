import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private snackBar: MatSnackBar, private auth:AuthService, private router:Router) {}

  login() {
    if (this.loginForm.valid) {
      // Lógica de inicio de sesión aquí
      this.auth.login(this.loginForm.value).then((res)=>{
        console.log(res);
        this.router.navigate(['/seguimiento-gastos']);
      }).catch((err)=>{
        console.log(err);
      })
    } else {
      this.snackBar.open('Por favor, complete todos los campos', 'Cerrar', {
        duration: 5000,
        verticalPosition: 'top',
      });
    }
  }

}
