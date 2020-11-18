import { Component } from '@angular/core';
import { MACHOService } from './services/macho.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MACHO';

  /**
   *
   */
  constructor(macho : MACHOService) {
      
  }
}
