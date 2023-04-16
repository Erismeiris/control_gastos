import { Injectable } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateCurrentUser } from '@angular/fire/auth';
import { tap } from 'rxjs';

@Injectable()
export class AuthService {

    //save user data
    public user: User[] = [];

constructor( private auth: Auth) { }

register( {email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password)
}

login( {email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password).then((res)=>{
        this.user.push(res.user);
    }
    )
}

//Update user profile


//Logout

logout(){
    return signOut(this.auth)
}

// Get current user and save it in user array
getUserLogedd(){
    return  this.auth.currentUser
    
}






}



