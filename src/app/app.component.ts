import { Component } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a6-frontend';


  // albumList = [
  //   {
  //     name: 'album1',
  //     id : '01',
  //     createdBy: 'me',
  //     coverPhotoUrl: 'photo1',
  //     dateCreated: 'now1'
  //   },
  //   {
  //     name: 'album2',
  //     id : '02',
  //     createdBy: 'me',
  //     coverPhotoUrl: 'photo2',
  //     dateCreated: 'now2'
  //   }
  // ]

  albumList:any;

   constructor (public albumService: AlbumService){
    
   }

   ngOnInit(): void{

    this.getAllAlbums();

   }
   
   getAllAlbums(){
     this.albumService.getAllAlbums().subscribe(
       (res)=> {
         this.albumList = res;
       },
       (error) => {
         console.log(error);
       }
     );
   }

}
