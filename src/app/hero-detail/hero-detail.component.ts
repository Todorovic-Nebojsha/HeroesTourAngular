import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Route, ActivatedRoute } from '@angular/router';
import {map, flatMap} from 'rxjs/operators'
import { HeroServiceService } from '../hero-service.service';
@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    constructor(private route:ActivatedRoute,private service:HeroServiceService) { }
    //@Input()hero : Hero;
    hero:Hero;
    ngOnInit() {
        this.route.paramMap.pipe(
            map(it=>+it.get('id')), //+ go konvertira od string vo broj !!!
            flatMap(id=>this.service.getHeroById(id))
            // od Observable<Observable<Hero>> pravi Observable<Hero>,posle subscribe ga vadi toj!,ovoj mozhe da e i mergeMap
        ).subscribe(i=>{
            console.log(typeof(i));
            this.hero=i;
        });
    }

}
