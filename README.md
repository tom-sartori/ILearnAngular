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
