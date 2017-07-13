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
  - the Component should display a simple element displaying static user information.
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
   
 ### Step 3 - Data binding
 
  - Under the the `app` folder create a new folder `models`
  - inside the folder create a new `UserModel` class with the following scheme
    ```json
      {
        "id": 0,
        "username": "john_d",
        "email": "john.doe@gmail.com",
        "info": {
          "firstName": "john",
          "lastName": "doe",
          "jobTitle": "Developer",
          "avatar": "http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png",
          "phoneNumber": "01-234-343434"
        }
      }
    ```
  - inside the `user-container.component` add `UserModel` property `currentUser` and instantiate it with random data inside the `ngOnInit` hook.
  - replace the template you created in step 2 to display data bound info from the `currentUser` property.
  - Add A simple form to the `user-container.component` with 2 text fields for the user name and email, and a Save button.
  - The input fields should also use data binding to display the `currentUser` fields, allowing us to edit the fields.
  - Clicking the save button should update the `currentUser` property and that should automatically update all the `currentUser` data across the template.

### Step4  - Directives
   
