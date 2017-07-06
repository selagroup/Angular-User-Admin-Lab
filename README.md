# User Admin Angular App

In This project we will build step by step a User Admin angular application.


### Step 1 - Create a new project
  
  - install the angular cli on your machine
    **BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
    ```bash
    npm install -g @angular/cli
    ```
  - Create a new angular project named "user-admin"
    ```bash
      ng new user-admin
      cd user-admin
    ```
  - Run the new project with `ng serve` and Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Step 2 - Modules And Components
  
   - under the `src/app` directory create a new directory `users` 
   - Create a new component `user-container.component` inside the above directory.
   - To Create a component create a `user-container` directory with 3 files inside it:
      - `user-container.component.ts`
      - `user-container.component.html`
      - `user-container.component.css`
  - the Component should display a simple element displaying user information.
    ```html
      <div class="user-item">
        <div>
          id:1
        </div>
        <div>
          username:johndoe
        </div>
        <div>
          email:johndoe@gmail.com
        </div>
      </div>
    ```
  - inside the `.css` file Add a css rule for the class `user-item` to style the component as you wish.
  - implement the `OnInit` lifecycle hook by implementing `OnInit` interface and implementing a `ngOnInit` method inside the component's class.
    the method should print to console `User Container Init`. 
  - Add the component to the `app.module` and to the `app.component` template. 
