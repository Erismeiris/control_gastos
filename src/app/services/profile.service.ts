import { Injectable } from '@angular/core';
import { collectionData, Firestore, collection,addDoc, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private firestore: Firestore, private authServices: AuthService) { }

  addProfile(profile: any){
    const newProfile = collection(this.firestore, 'profile');
    return addDoc(newProfile, profile)
  }

  //Get profile using firestore by uid
   getProfile(){
    const newProfile = collection(this.firestore, 'profile');
    return collectionData(newProfile, {idField: 'id'}).pipe(
      map((data: any) => data.filter((profile: any) => profile.uid === this.authServices.getUserLogedd()?.uid))
    )
  }

  deleteProfile(profile: any){
    const profileRef = doc(this.firestore, `profile/${profile.id}`)
    return deleteDoc(profileRef);
  }

  //Update profile using firestore
  updateData(documentId: string, newData: any): Promise<void> {
    const profileRef = doc(this.firestore, `profile/${documentId}`)
    return updateDoc(profileRef, newData)
  }
}
