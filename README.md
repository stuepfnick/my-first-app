This is my first app, created with Angular. I spent about 2-3 days learning and creating this quite simple project. Really like the component system and dependency injection, i.e. you can use the same instance of a service class easily for different components, without the need for a singleton pattern.

Next interesting steps would be to learn, how to connect to the backend through the HttpClient class. Did some experiments with pure JavaScript and fetch (and jQuery AJAX), theoretically this should also work with an angular app, but I am pretty sure, the HttpClient is much better suited. 😉
At the moment, the friends get saved in your browsers localstorage (but not the likes)

The running application can be found on my webspace:
https://stuepfnick.macbay.net/my-first-app/

# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
