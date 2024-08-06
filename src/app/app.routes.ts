import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    { path: 'submit', component: HomeComponent },
    {path: 'about', component:AboutComponent},
    {path: 'portfolio', component:PortfolioComponent},
    {path: 'contact', component:ContactComponent},
    { path: '**', component:NotFoundComponent},
];
