# AngularProject

#Edited Me
Getting started
Install JSON Server

npm install -g json-server
Create a db.json file with some data
{
  "retaurants": [
    {
      "id": 1,
      "name": "KFC retaurants",
      "address": "Walton,Dhaka",
      "email": "walton@walton.com"
    },
    {
      "id": 2,
      "name": "Walton retaurants",
      "address": "Gazipur,Dhaka",
      "email": "bd@test.com"
    },
    {
      "name": "Test Fastfood",
      "address": "Test,Dhaka",
      "email": "test@test.com",
      "id": 3
    },
    {
      "name": "WALTON",
      "email": "walton@gmail.com",
      "address": "Dhaka",
      "id": 4
    },
    {
      "name": "TFC",
      "email": "walton@gmail.com",
      "address": "Dhaka",
      "id": 5
    },
    {
      "name": "Tangail Fast Food",
      "email": "tfc@gmail.com",
      "address": "Tangail",
      "id": 6
    },
    {
      "name": "Natural Food",
      "email": "natural@test.com",
      "address": "natural,Dhaka",
      "id": 7
    }
  ]
}


Start JSON Server

json-server --watch db.json
Now if you go to http://localhost:3000/posts/1, you'll get

{ "id": 1, "title": "json-server", "author": "typicode" }

#End Edited Me

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
