# HeroesSPA

A Heores admin App SPA developed in Angular with Angular Material and Prime Flex. 
Using JSON Server to provide the data and a CRUD system to to allow advanced state management and reactivity.

## Quick try

Backend and Frontend is deployed, try the prod app now here https://arturovano.github.io/HeroresSPAApp/

## Development server

1. Clone the proyect
2. Execute `npm install`
3. Start backend `nmp run backend`
4. Execute the app `npm start`

## Project Overview

This project consists of two main modules that provide distinct functionalities: **Authentication** and **Superhero Management**.

### **1. Authentication Module**

- **Login and register**: Enables new users to login or create an account
- **Access Control**: 
  - Non-authenticated users can only view the login and register page.
  - Authenticated users cannot return to these pages.
    
### **2. Superhero Management Module**

- **External API Integration**: 
  - By default the local BD is empthy, but users can fetch heroes from an external API to populate the local database.
- **Custom Superhero Creation**: 
  - Users can create and manipulate their own heroes with custom attributes.
- **Database Persistence**: 
  - Fetched or created superheroes are saved in the application's database for future use.
