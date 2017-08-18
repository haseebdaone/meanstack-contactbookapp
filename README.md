# MyContacts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

Just a simple project playing with the same technologies I used in my previous one but this time I implemented Angular 2 instead of ejs.
So now I'm using MongoDB, Express, Angular 2 and Nodejs, which is a full MEAN stack for the first time!

This project is simply a little contact book, in which I'm pretending it contains contact info of powerfull people and the home page is like a status update on the most current events surrounding them.

I have CRUD operations but this time the data is saved to Mongolabs so that you have data persistance. Also with Angular 2 this becomes a Single Page Application (SPA) so there is a smooth transition as there is no other file being rendered the page updates dynamically. The fetching and manipulation of data is only done in one Component (contact-center component) and then data is Inputed into the nested components.

## Setup

"npm install" the pakage.json and then run "ng build" 
(also make sure you have angular cli installed globaly) this will creates the "/dist" folder 
which contains the index.html that the server will serve.
From here you can run "node server" to startup the server.
Go to loaclhost:3000