import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes:Hero[]=[]
  constructor(private service: HeroServiceService) { }

  ngOnInit() {
      this.service.getTopHeroes()
      .subscribe(i=>this.heroes=i);
  }

}
