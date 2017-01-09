import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component'; 
import {CreateComponent} from './create.component';
import {DeleteComponent} from './delete.component';
import {ListComponent} from './list.component';
import {UpdateComponent} from './update.component';
import{HomePageComponent} from './home-page/home-page.component';



export const router:Routes=[
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'create',component:CreateComponent},
{path:'delete',component:DeleteComponent},
{path:'list',component:ListComponent},
{path:'update',component:UpdateComponent},
{path:'home',component:HomePageComponent}
];
export const routes:ModuleWithProviders=RouterModule.forRoot(router);