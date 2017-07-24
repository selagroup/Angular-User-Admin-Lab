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
  - inside the `user-container.component` add  a `currentUser` property of type 'UserModel' and instantiate it with random data inside the `ngOnInit` hook.
  - replace the template you created in step 2 to display data bound info from the `currentUser` property.
  - Add A simple form to the `user-container.component` with 2 text fields for the user name and email, and a Save button.
  - The input fields should also use data binding to display the `currentUser` fields, allowing us to edit the fields.
  - Clicking the save button should update the `currentUser` property and that should automatically update all the `currentUser` data across the template.

### Step 4  - Directives

  - inside the `user-container.component` add a `users` property of type `Array<UserModel>`instantiate it inside the `ngOnInit` hook with an array containing random users.
  - remove the instantiation of the `currentUser`.
  - use the `*ngFor` directive to loop over the `users` array and render the user element for every item in the array.
  - For every item add a click event that will set the `currentUser` to the user item that was clicked.
  - The edit form should display only when there is a `currentUser` selected (use *ngIf).
  - When an item is clicked it should be displayed with a colored background (use *ngClass).
  
### Step 5  - Composition

  - break the `user-container.component` into 2 seperate components.
    - `user-list.component` handling the user list.
    - `user-edit.component` handling the user edit form.
 - The new component should **not** handle data but only recieve it as inputs and emit events as outputs.
 - The data will be passed from the `user-container.component`.
 - Create a `users.module` module and declare the 3 components inside it.
 - remove declaration `user-container.component` from `app.module` and add the `user.module` module as an import.
  
### Step 6  - Services

  - create a new `users.service` class with 3 methods `getUsers`,`updateUser`,`deleteUser`.
  - Add the appropriate provider to the `users.module`.
  - move the `users` property and it's instantiation from the `user-container-component` into the service.
  - now for the `user-container` should use the injected service to get the users list and updating the user inside.
  - inside the `user-edit.component` add a delete button that allows you to delete a user.
  - the delete button should emit a delete click event that should be handled inside the `user-container.component` which in turn should invoke the delete method on the service.
  
### Step 7  - Http

  #### Http Server
  - Before starting to work with the http client we would require server.
  - to run the server, open another terminal window and go to the `server` folder.
  - inside the `server` folder run:
    ```bash
      npm start
    ```
  - now we have restful api running on port 3000
  - the server follows restful practices, so for the `users` resource we will be using
  the following endpoints
  ``` javascript
    Get All users - GET http://localhost:3000/users
    Get Specific User - GET http://localhost:3000/users/{id}
    Create user - POST http://localhost:3000/users
    Update user - PUT http://localhost:3000/users/{id}
    Delete user - DELETE http://localhost:3000/users/{id}
  ```
  
  #### Client
  - Refactor the user service from the Previous Step to work with Angular's Http client.
  - The 3 methods `getUsers`,`updateUser`,`deleteUser` should now use the Http client to call the appropriate api endpoint as detailed above.
  - Remember that now the methods are async and should return an Observable that should be subscribed to.


### Step 8 - Routing
  - Create a new `app.routing` module the will hold the main root route.
    -the main route should basically should be a redirect route from the root path to `/users`.
  - Create a new `users.routing` that will hold the routes for the users views.
  - Create 2 new routes 
      - `/users`  - will display the list, mapped to the `users-container.component`
      - `/users/{id}` - will display the user view containing the user edit form mappaed to the `user-edit-container.component`.
 - Update the components code so that when clicking on a user inside the list we will be recirected to the user edit route.
 - in the user edit view clicking on save should now redirect back to the list when saving is finished and clicking on cancel just redirects back to the users list view.
      
      

  
 
   
