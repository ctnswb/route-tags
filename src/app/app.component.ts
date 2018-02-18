import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showCreateTag = false;
  showTagDeck = false;

  onCreateTag(){
    this.showCreateTag = true;
  }
  onShowDeck() {
    this.showTagDeck = true;
  }
}
