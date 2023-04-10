import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileditor = new FormGroup({
    uid: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    displayName: new FormControl('', [Validators.required]),
    photoURL: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required]),
    emailVerified: new FormControl('', [Validators.required]),
  });


  constructor() { }

  saveProfile() {
    console.log(this.profileditor.value);
  }


}
