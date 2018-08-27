# Front-end with Angular

We will explore the folders and files created by the Angular CLI. And by building a simple application, we will study the key concepts of angular: Components, Data Binding, Directives and Service.

Components are used to control the different views that we use in a web app. A component consists of a controller class written in TypeScript and the view template.

For coordinating the controlling class with the view template, angular offers different ways of data binding. Typically, data stored in a class property is rendered in a view template and when an event raised in the template is sent back to the controlling class to be handled by a class method. 

Sometimes, simple data binding is not enough, for example, if we want to render an entire array as an HTML list, for situations like that where we need to generate or manipulate DOM elements, we use one of the angulars’ built-in directives. 

As mentioned already the task of the component class is to control the view. All the logic needed to control the behavior of the related view template should be part of the class. On the other hand, everything which is not directly related to the view and requires substantial coding and resources should be moved into a separate class called a service. As an example, the service could be responsible for requesting data from the server and a component class would consume the service to load the data and render it in the view template.

## Using the Angular CLI to setup an Angular Application

To see these concepts in practice, first create a new empty folder on your machine to store your first angular app and switch over to VSCode and open the folder created.

Install the Angular CLI globally `npm install @angular/cli -g`, the Angular CLI is a tool which makes it easy to create new angular applications, setting up the development environment and also assisting in common angular tasks like creating new components or services.

Create a new angular project by the command "ng new" followed by the "name-of-the-app" `ng new books-app`.

When the setup is done navigate into the app folder by using the command `cd books-app` in the terminal window. Then, we are ready to run the application with the CLI command `ng serve`. The server will be started and the app will be available locally on port 4200 (http://localhost:4200/). The app will automatically reload if you change any of the source files.

Within the app's main folder books-app, there are three sub folders and a couple of configuration files. The e2e folder is for testing purposes. The node_modules folder contains all the node modules angular depends on. The src folder contains the source code for the app.

Within the src folder, we find the file index.html which is the html shown in the browser. The file contains a simple HTML boilerplate, and the body of this HTML consists of nothing more than a custom tag called app-root.

app-root refers to the root component which is found in the "src/app" folder. The component is called here app component and the main file is "app.component.ts". This file contains the controller class which is basically just an ordinary TypeScript class but with metadata attached through a class decorator. The selector 'app-root' is used to include the component in an HTML file, in a case of the root component, we saw it was included in the index.html file. And we have references to the HTML template and CSS stylesheet belonging to the component.