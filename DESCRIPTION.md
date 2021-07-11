# Task Description

## Application Requirements

### The application 'Books' is an electronic library catalogue.

### The 'Books' has a list containing all books in the library
* Book names are displayed in the list.
* User can select book from the list: book details will be displayed as a separate card.
* User can delete the book. The book will disappear from the list along with it's details.
* User should be able to filter out the books by book name or part of book name. Filtration is case insensitive.
* Filtration can be dropped by erasing the filter criteria.

### Every Book has an associated card with book details
* Book has the following fields: 'Title', 'Author', 'Publisher', 'Year of publishing'.
* All those fields are mandatory.
* 'Title', 'Author', 'Publisher' fields can take any symbols as an input.
* 'Year of publishing' takes only numbers as an input.
* User can modify book properties and Save or Cancel the changes through appropriate buttons.

## Candidate objectives
* Based on given Application Requirements, you have to create:
  * A set of Test Cases
  * Implement end-to-end Tests that cover these Test Cases. File names with your code of e2e tests should have `*.e2e-spec.ts` format and should be placed in `e2e` folder

## Results delivery
* Provide entire solution as a zipped file, in the same way it was given to you (node_modules is not required to be in)
* Provide created Test Cases and the list of found bugs with reproduction steps in some document(s) (you can use any kind of document format)

## Tips and Suggestions

* Prefer to use `data-test-*` attributes for element location.
* Most of the interactive DOM elements are already marked with `data-test-*` attributes. Use DOM explorer to find them.
* Any UX/layout related problems can be reported as well