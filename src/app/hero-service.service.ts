import { Injectable } from '@angular/core';
import { HEROES } from './mock.heroes';
import { Hero } from './hero';
import { Observable, of, from } from 'rxjs';
import { MessageService } from './message.service';
import { map, find, delay } from 'rxjs/operators'
@Injectable({
    providedIn: 'root'
})
export class HeroServiceService {

    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
        this.messageService.addMessage("HeroService: Fetched heroes!");
        return of(HEROES);
    }
    getTopHeroes(): Observable<Hero[]> {
        return this.getHeroes().pipe(
            map(it => it.slice(0, 4))
        )
    }
    getHeroById(id: number): Observable<Hero> {

        return from(HEROES).pipe(
            //delay(1500), proba kako ke funkcionira ss delay 
            find(it => it.id == id)
        );
    }

    getById(id: number):Hero {
        return HEROES.find(it=>it.id==id);
    }
}
