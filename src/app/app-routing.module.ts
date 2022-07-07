import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, TitleStrategy, RouterStateSnapshot} from '@angular/router'; // CLI imports router

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MainComponent } from "./main/main.component";
import { CommonModule } from "@angular/common";
import {Title} from "@angular/platform-browser";
import {ChildAComponent} from "./child-a/child-a.component";
import {ChildBComponent} from "./child-b/child-b.component";


const routes: Routes = [
  {
    path: 'main-component',
    title: 'Main component',
    component: MainComponent
  },
  {
    path: 'first-component',
    title: 'First component',
    component: FirstComponent,  // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ],
  },
  {
    path: 'second-component',
    title: 'Second component',
    component: SecondComponent
  },
  {
    path: '',
    redirectTo: '/first-component',
    pathMatch: 'full'
  }, // redirect to `first-component`
  {
    path: '**',
    title: 'Page not found',
    component: PageNotFoundComponent
  },  // Wildcard route for a 404 page
]; // sets up routes constant where you define your routes


@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}

@NgModule({
  declarations: [
    MainComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
  ],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule, MainComponent],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }

