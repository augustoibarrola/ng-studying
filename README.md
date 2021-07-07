## Technologies Used

- [Bootstrap](https://getbootstrap.com/)

- [Angular Highlight.js](https://www.npmjs.com/package/ngx-highlightjs)
    - [Github Docs](https://github.com/highlightjs/highlight.js)

## To Do 

### Forms

- [ ] add structural directives for `forms.component.html` to show either template, reactive, or validations
- [ ] remove disabled anchors for reactive/template forms
- [ ] STUDY: https://angular.io/api/forms/AbstractControl
    - [ ] Build out notes on above as a child of `forms.component.html`
- [ ] add functionality to show form codes simplified or with full bootstrap styling in code snippets  
- [ ] ideally, user should be able to scroll over a line of code or snippet/keyword and it should highlight the corresponding explanation  
- [ ] fix css by removing custom in `styles.css` and fixing with bootstrap

- [ ] have to fix `dashboard` component
- [ ] REMOVE `dashboard` 
    - [ ] remove nav anchor (user should not be able to navigate to this item)
    - [ ] delete dashboard components 

### Routing 
 - [ ] implement preloading lazy loaded modules 
 - [ ] implement route guards (not a huge need, as this will require a whole rethinking of the application and massive refactoring)
 - [ ] STUDY https://angular.io/guide/router#custom-preloading-strategy
    - [ ] basic implementation already in `approutingmodule`, but more complex implementation would be great to understand the concept further
