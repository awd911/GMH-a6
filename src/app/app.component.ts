import { Component } from '@angular/core';
import { AlbumService } from './album.service';
import {AuthenticationService} from "./services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a6-frontend';

  constructor(public authService: AuthenticationService, private router: Router) {

  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
  }
}
