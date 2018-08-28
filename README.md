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

## BooksApp!

Let's proceed creating a simple books app which shows a list of books. To start, we need a model for the books data. In the folder app, create a sub folder model and in there create a file book.ts, exporting a class Book containing properties like the title, a list of authors and coverImage.

```TypeScript
export class Book {
    title: string
    authors: string[]
    coverImage: string
}
```

The Book class is then imported in the app component.

```TypeScript
import { Book } from './model/book';
```

In a first step, we will provide some test data directly in the component class. For that, create a property books which is an array of books and add some data manually.

We could take the data from [google books api](https://developers.google.com/books/docs/v1/using#WorkingVolumes), there you will find an example for a get request for searching book volumes, copy this [link](https://www.googleapis.com/books/v1/volumes?q=search+terms) into the browser's address bar and modify it to search for books written by Alex Garland, to this end set the search string q to inauthor:"Alex Garland" and add a second property langRestrict to restrict search results to the English language. After submitting the get request/[modified link](https://www.googleapis.com/books/v1/volumes?q=inauthor:"Alex Garland"&langRestrict=en), you should see the results in JSON format on the screen. Now copy the relevant data; title, author and thumbnail from a few results and use it to generate some test data.

In the component's template, Add a unordered list and include just one element for the beginning corrsspoding to the first entry in the books array. To display the data in a template we use what is called interpolation, for that we place the relevant properties from the component class within double curly braces.

```HTML
{{ books[0].authors[0] }} <strong>{{ books[0].title }}</strong>
```

Interpolation is one of the four ways of data binding in angular. Data binding is a convieninet mechanism for coordinating the controlling class with the view template. In this case, we push data from the class into the HTML template.

Beside interpolation, there is another way to push data from the class into the HTML, which is called property binding. With property binding we can bind a DOM property to a property in the component class. In our case we add an image tag and bind the src property to the thumbnail link which is part of our test data in the component class. To bind the DOM property src, enclose it in square brackets and set it to the property coverImage. Moreover, add some CSS class.

```HTML
<img [src]="books[0].coverImage" class="preview">
```

So right now, we control which image is shown by binding the DOM's property src, But we don't have control over the class property yet. To get control over it we can use the class property binding which is a special kind of property binding. Again we use square brackets, and within the square brackets we qualify the class by [class.className] in our case [class.preview] and set it to a Boolean value, let's say "previewMode" defined in the component class.

```HTML
 <img [src]="books[0].coverImage" [class.preview]="previewMode">
```
by setting previewMode to true, we have the same situation as before, the preview class is always on, with the difference that we can now toggle the class based on some logic within the component. For example, we could toggle the preview class when we click on the image. To implement a click handler, we use angular's event binding which is again another way of data binding. However, data flows not from the class into the HTML but goes the opposite direction. The event originating in the view is propagated to the class and handled by a class method. For implementing the event binding, we enclose the event in ordinary round brackets and set it to the class method used to handle the event. Here we call the class method onClickImage and define that method in the component class.

```HTML
<img [src]="books[0].coverImage" [class.preview]="previewMode" (click) ="onClickImage()">
```

At this point, we learned about three of the four fundamental ways of data binding in angular; interpolation and property binding where data is pushed from the class into the HTML and event binding where the data flows the opposite direction from the view to the component class. The remaining type is two-way binding, where data flows in both directions and in which we will come across later.

For now, let’s go back to our small project and observe that all the content is at the moment included in the app's root component. when the app grows bigger, it is not practical to keep everything in a single component. For refactoring the code, start with creating a separate books component for showing the books list. This is done by the CLI command "ng generate component" followed by the "component-name". So, within the terminal submit the command `ng generate component books`. Then, angular creates a component books as a child of the root component.

Now, you need to copy all the books list related content to that new component. Also check that the angular CLI automatically assign the selector 'app-books' for including the books component in the parent template. In this case, we include the books component in the root component.

```HTML
<div class="container">
  <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
  </div>
</div>
<app-books></app-books>
```

After finishing the refactoring, serve the application with ng serve and test in the browser that everything is still the same.

Currently, we still don't show the whole list of books but just the first entry of the books array. To change that we need to generate a list item for each book in the books array. This is done by using the structural directive ngFor which is provided by angular to generate a list of elements based on a component array. The built-in structural directives are proceeded by a star '*'. So, within the li tag add a directive `*ngFor` and for the instruction in double quotes use the syntax `let book of books` to define a template input variable book and run through all the elements of the component's books array. Thus, ngFor does the following: It repeats the list item element and provide the respective element of the given array in a template variable. Now, all what we need to change is to replace the first book in the list that was hard coded by the template variable book.

```HTML
<ul>
  <li *ngFor ="let book of books">
      <img [src]="book.coverImage" [class.preview]="previewMode" (click) ="onClickImage()">
    {{ book.authors[0] }} <strong>{{ books.title }}</strong>
  </li>
</ul>
```

Back in the browser, we now see a list of all the books contained in the component's books array. However, by clicking on a thumbnail all cover images resize not just the one we clicked on. The reason is that we defined previewMode as a global class property and not as a property of each book object. To change that, include the property previewMode in the book model.

```TypeScript
export class Book {
    title: string
    authors: string[]
    coverImage: string
    previewMode: true
}
```

And remove it from the component class. Instead, initialize it with true in each element of the dummy data.

```TypeScript
books: Book[] = [
  {
    title: "Sunshine",
    authors: ["Alex Garland"],
    coverImage: "http://books.google.com/books/content?id=uqhlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    previewMode : true
  },
  {
    title: "Ex Machina",
    authors: ["Alex Garland"],
    coverImage: "http://books.google.com/books/content?id=yvFMBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    previewMode : true
  },
  {
    title: "Annihilation",
    authors: ["Alex Garland"],
    coverImage: "http://books.google.com/books/content?id=pjBHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    previewMode : true
  }
];
```

In the books template, modify the class property binding. Also add the book variable as parameter to the event handler onClickImage.

```HTML
<img [src]="book.coverImage" [class.preview]="book.previewMode" (click) ="onClickImage(book)">
```

And update the onClickImage method in the component class.

```TypeScript
onClickImage(book) {
  book.previewMode = !book.previewMode;
}
```

Back in the browser, clicking on an item's thumbnail, now only the size of the clicked image should change, that’s because on click we send the individual book object clicked to the class and there we switch on and off the previewMode property of the respective book.

One aspect we didn't care about yet is a case of multiple authors which is not reflected in our test data right now. Currently we just render the first author in a list of authors. In order to take account of that, we add a method getAuthorsList in the class that is modeling the book data. The method returns a string which is built by joining the authors separated by a comma.

```TypeScript
export class Book {
    title: string
    authors: string[]
    coverImage: string
    previewMode: true
    getAuthorsList() : string {
        return this.authors.join(", ");
    }
}
```

In the template of the books component we then use this method to display the list of authors.

```HTML
<ul>
  <li *ngFor ="let book of books">
      <img [src]="book.coverImage" [class.preview]="book.previewMode" (click) ="onClickImage(book)">
      {{ book.getAuthorsList() }} <strong>{{ books.title }}</strong>
  </li>
</ul>
```

One more thing we should add in the model class is a class constructor used to create book objects. We use the class properties title, authors and coverImage as constructor parameters since these properties have to be supplied from outside the class. On the other hand, previewMode is not provided from outside but is initialized to true for all new objects.

```TypeScript
export class Book {
    constructor(public title: string, public authors: string[], public coverImage: string) {
        this.previewMode = true;
    }
    previewMode: true
    getAuthorsList() : string {
        return this.authors.join(", ");
    }
}
```

In the books component we modify the definition of the test data accordingly using the class constructor to create a dummy data.

```TypeScript
books: Book[] = [
  new Book(
    "Sunshine",
    ["Alex Garland"],
    "http://books.google.com/books/content?id=uqhlAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  ),
  new Book(
    "Ex Machina",
    ["Alex Garland"],
    "http://books.google.com/books/content?id=yvFMBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  ),
  new Book(
    "Annihilation",
    ["Alex Garland"],
    "http://books.google.com/books/content?id=pjBHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  )
];
```

Back in the browser, check that everything still working as before. So far, we talked about the angular component architecture, different ways of data binding for coordinating the component class with the view template and we used an angular directive to generate DOM elements.