# Subscription form
The app allows to the user to subscribe to a newsletter
The form contains these elements:
- 3 input text fields:( Name, Company, Email)
- 1 checkbox to agree to subscribe to newsletter
- 2 buttons: (submit, clear)

## Senario
- The submit button needs to validate that the 3 input fields are filled.
- The email should be a valid email address
- The checkbox needs to be checked.
- If any field is invalid, notify the user that the field is invalid.
- If all fields are valid, change screen and show the user that they have successfully subscribed to the newsletter

## Features

- The 3 inputs are reusable components
- The 2 buttons are reusable components
- Using CSS module for styling the reusable components. 
- Responsive design
- Data validation without libraries of validation
- Redirection to welcome screen when submitting a valid form wthin 0.8sec like a request to the server
- Disable submit button while requesting the form
- Include unit testing for data validation

## Installation
- the app requires [Node.js]
- Install the dependencies and start the server.
```sh
npm install
npm start
```
## Testing
```sh
npm test
```
## Links
links
[Preview]: 
<https://subscription-form-task.netlify.app>
[Source code]: 
<https://github.com/Aissa-Dev/task-front>
[Figma file]: 
<https://www.figma.com/file/sKKJzdSyXCk1Go75ncmUBg/Untitled?node-id=0%3A1>
