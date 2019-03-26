import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Route[] = [{
    path: 'heroes',
    component: HeroesComponent
},
{
    path: 'dashboard',
    component: DashboardComponent
},
{
    path:'heroes/:id',//placeholder za pathVariable
    component: HeroDetailComponent,
    
},
{
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
    //pathMAtch e full za da fakja samo prazno, ovoj e da ne redirektira na gotovu rutu, da nema prazna strana!
}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

