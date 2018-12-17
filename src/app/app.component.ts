import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rh-manager-front';

  loadedFeature = 'employees';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
