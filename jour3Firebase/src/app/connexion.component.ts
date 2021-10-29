import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms"; 
import { AngularFireAuth } from "@angular/fire/compat/auth"
import { GoogleAuthProvider , signInWithPopup, getAuth } from "firebase/auth"

@Component({
  selector: 'app-connexion',
  template: `
  <h1 class="text-center mt-5">Connexion avec Firebase Auth</h1>
  <form class="offset-3 col-6" #f="ngForm" (submit)="onSubmit(f)">
    <div class="d-flex my-4">
      <input 
        name="email" type="email" class="form-control me-3" placeholder="votre@email.fr" ngModel #email="ngModel" required>
      <input 
        name="password" type="password" class="form-control" placeholder="votre password" ngModel #password="ngModel" required>
    </div>
    <div class="d-flex justify-content-center">
      <input type="submit" class="btn btn-outline-dark">
    </div>
  </form>
  <button (click)="onClickGoogle()">Google</button>  
  `
})
export class ConnexionComponent implements OnInit {

  public onClickGoogle(){

    const provider = new GoogleAuthProvider();
    // this.auth.getRedirectResult()
    this.auth.signInWithPopup(provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
  // const credential = GoogleAuthProvider.credentialFromResult(result);
    /* if(credential){
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user; */
      console.log(result)
     /*  console.log(user) */
    }
    
    // ...
  ).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  public onSubmit(f : NgForm){
    if(f.valid){
      const { email , password } = f.value ;

      this.auth.signInWithEmailAndPassword(email.trim() , password)
        .then( rep => {
          localStorage.setItem("auth", JSON.stringify(rep.user) )
          window.location.href = "/";
        } )
        .catch( ex => console.log(ex.message) )

    }
  }

  constructor(private auth : AngularFireAuth) { }

  ngOnInit(): void {
  }

}
