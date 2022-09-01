import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$ = this.authService.currentUser$;

  constructor(private authService: AuthenticationService, public angularFireAuth: AngularFireAuth) {


  }



  ngOnInit(): void {
  }

  get userId (){
    this.angularFireAuth.currentUser.then( data => {

      if( data!=null ){

        return data.uid;
      }
      else{
        return null;
      }

    })

    return null;
  }

}
