# ILearnAngular 


<details>
  <summary> 
    Installation 
  </summary>
  
  <br/>  
  
  **Node JS** 
  
  ```bash 
  brew install nvm
  nvm install node
  ```
  
  **Angular installation**
  
  ```bash 
  npm install -g @angular/cli
  sudo chown -R 501:20 "/Users/tom/.npm"
  ```
</details>


## Tour of heroes 

You develop **applications** in the context of an Angular **workspace**. A **workspace** contains the files for **one or more projects**. A **project** is the set of **files** that comprise an app, a library, or end-to-end (e2e) tests. For this tutorial, you will create a new workspace.

<details>
  <summary>
    Create a project
  </summary>
  
  <br/>
  
  **Creation**  
  
  ```bash 
  ng new angular-tour-of-heroes
  cd angular-tour-of-heroes
  ng serve --open
  ```
  
  The `ng serve` command builds the app, starts the development server, watches the source files, and rebuilds the application as you make changes to those files.

  The `--open` flag opens a browser to `http://localhost:4200/`. 
  
  **Angular components**  
  
  The page you see is the application shell. The shell is controlled by an Angular component named `AppComponent`.

  Components are the fundamental building blocks of Angular applications. They **display data** on the screen, **listen** for user input, and take **action** based on that input.

  
  **Get Angular's component value in HTML file** 

  Use : {{component}}
</details>


<details>
  <summary>
    1. The Hero editor
  </summary>
  
  ```bash 
  ng generate component heroes
  ```
  
  Generate in `heroes.component.ts` : 
  
  ```ts 
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
  })
  export class HeroesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

  }
  ```
  
  You always import the **Component** symbol from the Angular core library and annotate the component class with `@Component`.

  `@Component` is a decorator function that specifies the Angular metadata for the component.

  The CLI generated three metadata properties:

  1. **selector** — the component's **CSS** element selector
  1. **templateUrl** — the **location** of the component's template file.
  1. **styleUrls** — the **location** of the component's private **CSS** styles.
  
  Always **export** the component class so you can **import it elsewhere** ... like in the AppModule.
  
  
  ---
  
  `[(ngModel)]` is Angular's two-way data binding syntax.

  Here it binds the `hero.name` property to the HTML textbox so that data can flow in both directions: **from** the `hero.name` property **to** the textbox, and **from** the textbox back **to** the `hero.name`.
  
  
</details>


<details>
  <summary>
    2. Display a list 
  </summary>

  List syntax : 
  ```ts
  const HEROES: Hero[] = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
  ];
  ```
  
  Iteration on the html file : 
  ```angular2html
  <li *ngFor="let hero of heroes" >
  ```

</details>




