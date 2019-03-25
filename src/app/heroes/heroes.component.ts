import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock.heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    hero: Hero = {
        id: 1,
        name: "Deadpool"
    };
    
    @Output() selected=new EventEmitter<Hero>();
    @Input()selectedHero = Hero;

    heroes=HEROES;

    constructor() { }

    ngOnInit(): void {

    }

    onSelectHero(hero: Hero):void{
        console.log("Hero selected",hero);
        //this.selectedHero=hero;
        this.selected.emit(hero);
    }
}
