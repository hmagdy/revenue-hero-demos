import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revenue-hero-angular-demo';


  handleButtonClick() {
    const hero = new window.RevenueHero({ routerId: '590' });

    hero
      .submit({ email: "example@example.com", noOfEmployees: "50-100" })
      .then((data) => {
        hero.dialog.open(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }


}
