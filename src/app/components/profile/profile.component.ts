import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { id } from '@swimlane/ngx-charts';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  uid: any;
  profileditor: FormGroup;

  public profile: any;

  constructor(private authService: AuthService,
    private profileService: ProfileService,
    private router: Router, private fb: FormBuilder) {

    this.uid = this.authService.getUserLogedd()?.uid/*  */

    this.profileditor = this.fb.group({
      uid: [this.uid],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      country: ['', [Validators.required]],
      currency: ['', [Validators.required]],
    })
    /* this.profileditor = new FormGroup({
      uid: new FormControl(this.uid),
      email: new FormControl(this.profile.email, [Validators.required, Validators.email]),
      name: new FormControl(this.profile.name, [Validators.required]),
      country: new FormControl(this.profile.country, [Validators.required]),
      currency: new FormControl(this.profile.currency, [Validators.required]),
      
    }); */

  }

  ngOnInit(): void {
    this.getProfile()
  }

  // save profile or update profile

  saveOrUpdateProfile() {
      if (this.profile) {
        this.profileService.updateData(this.profile.id, this.profileditor.value)
          .then(() => {
            alert('Profile updated')
            this.router.navigate(['/seguimiento-gastos'])
          })
      } else {
        this.saveProfile()
        alert('Profile saved')
        this.router.navigate(['/seguimiento-gastos'])
      }
    
  }

  saveProfile() {
    //save profile with uid
    this.profileditor.value.uid = this.uid
    this.profileService.addProfile(this.profileditor.value)


  }

  getProfile() {
    this.profileService.getProfile().subscribe((data) => {
      this.profile = data[0]

    })
  }


}
