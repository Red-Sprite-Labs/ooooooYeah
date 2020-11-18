import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MACHOMODService {

  constructor() 
  {
    let fileUrl = "../assets/ohYeah.mp3";
    let audio = new Audio(fileUrl);
    audio.volume = 1;
    console.log("MACHO'D");
    document.addEventListener('keydown', () => {
      audio.play();
    });
   }
}
