import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroServiceService } from './hero-service.service';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes: Hero[] = [];
    messages=[];

    constructor(private service: HeroServiceService,private messageService:MessageService) {

        console.log(this.heroes);
        // ova mozhe da bide prazno,bidejki servisot e asinhron, podocna da se inicijalizira nizata pri vchituvanje golem br podatoci
        this.messages=messageService.getMessages();
    }

    
    selectedHero: Hero;
    onSelected(hero: Hero) {
        console.log("new hero is selected in app component!", hero);
        this.selectedHero = hero;
    }
    onClear(){
        this.messageService.clear();
    }
}
