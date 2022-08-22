import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alurapic';

  photos: {url: string, description: string}[] = [
    {
      url: 'https://media.discordapp.net/attachments/398988559123742723/1010745744908615731/unknown.png',
      description: 'brabuleta'
    },
    {
      url: 'https://media.discordapp.net/attachments/398988559123742723/1010745744908615731/unknown.png',
      description: 'brabuleta'
    }
  ]
}
